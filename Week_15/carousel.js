import { Component, drag } from './framework';

class Carousel extends Component {
    constructor() {
        super();
        this.attributes = Object.create(null);
    }

    // 重写方法，保存attributes
    setAttribute(name, value) {
        this.attributes[name] = value;
    }

    render() {
        const root = document.createElement('div');
        root.classList.add('carousel');
        for (let record of this.attributes.src) {
            const child = document.createElement('div');
            child.style.backgroundImage = `url(${record})`;
            root.appendChild(child);
        }

        let position = 0;
        const dragControl = drag(root)
            .dragstart((e) => {
                dragControl.state = { startX: e.clientX };
            })
            .drag((e, { startX }) => {
                const children = root.children;
                let x = e.clientX - startX;

                let current = position - Math.round((x - (x % 500)) / 500);

                for (let offset of [-1, 0, 1]) {
                    let pos = current + offset;
                    // 保证不会是负数
                    pos = (pos + children.length) % children.length;
                    children[pos].style.transition = 'none';
                    children[pos].style.transform = `translateX(${-pos * 500 + offset * 500 + (x % 500)}px)`;
                }
            })
            .dragEnd((e, { startX }) => {
                const children = root.children;
                let x = e.clientX - startX;
                position = position - Math.round(x / 500);

                for (let offset of [0, -Math.sign(Math.round(x / 500) - x + 250 * Math.sign(x))]) {
                    let pos = position + offset;
                    // 保证不会是负数
                    pos = (pos + children.length) % children.length;
                    children[pos].style.transition = '';
                    children[pos].style.transform = `translateX(${-pos * 500 + offset * 500}px)`;
                }
            });

        //#region 轮播逻辑
        // 每一次只会有两个图片在可视区
        // let currentIndex = 0;
        // setInterval(() => {
        //     const children = root.children;
        //     let nextIndex = (currentIndex + 1) % children.length;
        //     let next = children[nextIndex];
        //     let current = children[currentIndex];

        //     next.style.transition = 'none';
        //     next.style.transform = `translateX(${100 - nextIndex * 100}%)`;

        //     setTimeout(() => {
        //         next.style.transition = '';
        //         current.style.transform = `translateX(${-100 - currentIndex * 100}%)`;
        //         next.style.transform = `translate(${-nextIndex * 100}%)`;

        //         currentIndex = nextIndex;
        //     }, 16);
        // }, 3000);
        //#endregion

        this.root = root;
        return root;
    }

    mountTo(parentElement) {
        parentElement.appendChild(this.render());
    }
}

export default Carousel;
