import { Timeline, Animation } from './animation';
import { createElement, Fragment } from './framework';
import * as ease from './ease';

const demo = (
    <Fragment>
        <div id="el2" style={{ width: '100px', height: '100px', backgroundColor: 'green' }} />
        <div id="el" style={{ width: '100px', height: '100px', backgroundColor: 'red' }} />
        <button id="pause-btn">pause</button>
        <button id="resume-btn">resume</button>
    </Fragment>
);

demo.mountTo(document.body);

const tl = new Timeline();
tl.start();

const el = document.querySelector('#el');
const el2 = document.querySelector('#el2');
const pauseBtn = document.querySelector('#pause-btn');
const resumeBtn = document.querySelector('#resume-btn');

el2.style.transition = `transform 2s ease`;

requestAnimationFrame(() => {
    el2.style.transform = `translateX(500px)`;
});
tl.add(new Animation(el.style, 'transform', 0, 500, 2000, 0, ease.ease, (v) => `translateX(${v}px)`));
pauseBtn.addEventListener('click', () => {
    tl.pause();
});
resumeBtn.addEventListener('click', () => {
    tl.resume();
});
