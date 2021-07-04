import { Timeline, Animation } from './animation';

const tl = new Timeline();
setTimeout(() => {
    tl.add(new Animation({}, 'a', 0, 100, 1000, null));
}, 2000);

tl.start();
