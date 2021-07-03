import { createElement, Component } from './framework';

class Div extends Component {
    constructor() {
        super();
        this.root = document.createElement('div');
    }
}

const app = (
    <div>
        <Div>
            <span>123</span>
            <span>123</span>
            <span>123</span>
            <span>123</span>
        </Div>
        <span>123</span>
        <span>123</span>
        <span>123</span>
        <span>123</span>
    </div>
);

app.mountTo(document.body);
