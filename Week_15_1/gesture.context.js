let element = document.documentElement;

element.addEventListener('mousedown', (event) => {
    start(event);

    let mousemove = (ev) => {
        move(ev);
    };

    let mouseup = (ev) => {
        end(ev);
        element.removeEventListener('mousemove', mousemove);
        element.removeEventListener('mouseup', mouseup);
    };

    element.addEventListener('mousemove', mousemove);
    element.addEventListener('mouseup', mouseup);
});

element.addEventListener('touchstart', (event) => {
    for (let touch of event.changedTouches) {
        start(touch);
    }
});
element.addEventListener('touchmove', (event) => {
    for (let touch of event.changedTouches) {
        move(touch);
    }
});
element.addEventListener('touchend', (event) => {
    for (let touch of event.changedTouches) {
        end(touch);
    }
});
// touch 异常结束
element.addEventListener('touchcancel', (event) => {
    for (let touch of event.changedTouches) {
        cancel(touch);
    }
});

let handler;
let startX, startY;

let isPan = false;
let isTap = true;
let isPress = true;

let start = (point, context) => {
    // console.log('start', point.clientX, point.clientY);
    context.startX = point.clientX;
    context.startY = point.clientY;

    context.isPan = false;
    context.isTap = true;
    context.isPress = false;

    handler = setTimeout(() => {
        console.log('press');

        context.isPan = false;
        context.isTap = false;
        context.isPress = true;

        context.handler = null;
    }, 500);
};
let move = (point, context) => {
    // console.log('move', point.clientX, point.clientY);

    let dx = point.clientX - context.startX;
    let dy = point.clientY - context.startY;

    // 10px的逻辑
    if (!isPan && dx ** 2 + dy ** 2 > 100) {
        context.isPan = true;
        context.isTap = false;
        context.isPress = false;
        context.console.log('panstart');
        clearTimeout(context.handler);
    }

    if (isPan) {
        console.log('pan', dx, dy);
    }
};
let end = (point, context) => {
    // console.log('end', point.clientX, point.clientY);

    if (isTap) {
        console.log('tap');
        clearTimeout(context.handler);
    }

    if (isPan) {
        console.log('panend');
    }

    if (isPress) {
        console.log('pressend');
    }
};
let cancel = (point, context) => {
    // console.log('cancel', point.clientX, point.clientY);
    clearTimeout(context.handler);
};
