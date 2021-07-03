import { createElement, Component } from './framework';

const pic = [
    'https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg',
    'https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg',
    'https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg',
    'https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg',
];

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

        for (let record of this.attributes.src) {
            const child = document.createElement('img');
            child.src = record;
            root.appendChild(child);
        }

        return root;
    }

    mountTo(parentElement) {
        parentElement.appendChild(this.render());
    }
}

const a = <Carousel src={pic} />;
a.mountTo(document.body);
