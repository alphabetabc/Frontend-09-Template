function createElement(type, attributes, ...children) {
    let element;
    if (typeof type === 'string') {
        element = new ElementWrapper(type);
    } else {
        element = new type();
    }

    for (let attr in attributes) {
        // console.log(attr, element);
        element.setAttribute(attr, attributes[attr]);
    }

    for (let child of children) {
        if (typeof child === 'string') {
            child = new TextWrapper(child);
        }
        element.appendChild(child);
    }

    return element;
}

class Component {
    // constructor() {
    //     this.root = this.render?.();
    // }

    setAttribute(name, value) {
        if (name === 'style') {
            Object.assign(this.root.style, value);
            return;
        }
        this.root.setAttribute(name, value);
    }

    appendChild(child) {
        child.mountTo(this.root);
        // this.root.appendChild(child);
    }

    mountTo(element) {
        element.appendChild(this.root);
    }
}

class ElementWrapper extends Component {
    constructor(type) {
        super();
        this.root = document.createElement(type);
    }
}

class TextWrapper extends Component {
    constructor(content) {
        super();
        this.root = document.createTextNode(content);
    }
}

class Fragment extends Component {
    constructor() {
        super();
        this.root = document.createDocumentFragment();
    }
}

const noop = () => {};
class Drag {
    constructor(target) {
        this.dragstart = this.dragstart.bind(this);
        this.drag = this.drag.bind(this);
        this.dragEnd = this.dragEnd.bind(this);
        this.#init(target);
    }

    #init(target) {
        target.addEventListener('mousedown', (e) => {
            this.#dragstart(e);

            const drag = (e) => {
                this.#drag(e, this.#state);
            };

            const dragend = (e) => {
                this.#dragend(e, this.#state);

                document.removeEventListener('mousemove', drag);
                document.removeEventListener('mouseup', dragend);
            };

            document.addEventListener('mousemove', drag);
            document.addEventListener('mouseup', dragend);
        });
    }

    #dragstart = noop;
    #drag = noop;
    #dragend = noop;

    #state = {};

    /**
     * @param {any} state
     */
    set state(state) {
        if (typeof state !== 'object' && state !== null) {
            state = { value: state };
        }
        this.#state = Object.assign(this.#state, state || {});
    }

    dragstart(cb) {
        this.#dragstart = cb;
        return this;
    }

    drag(cb) {
        this.#drag = cb;
        return this;
    }

    dragEnd(cb) {
        this.#dragend = cb;
        return this;
    }
}

const drag = (target) => {
    return new Drag(target);
};

export { createElement, Component, Fragment, drag };
