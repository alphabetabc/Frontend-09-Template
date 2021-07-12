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

let start = (point) => {
    // console.log('start', point.clientX, point.clientY);
    startX = point.clientX;
    startY = point.clientY;

    isPan = false;
    isTap = true;
    isPress = false;

    handler = setTimeout(() => {
        console.log('press');

        isPan = false;
        isTap = false;
        isPress = true;

        handler = null;
    }, 500);
};
let move = (point) => {
    // console.log('move', point.clientX, point.clientY);

    let dx = point.clientX - startX;
    let dy = point.clientY - startY;

    // 10px的逻辑
    if (!isPan && dx ** 2 + dy ** 2 > 100) {
        isPan = true;
        isTap = false;
        isPress = false;
        console.log('panstart');
        clearTimeout(handler);
    }

    if (isPan) {
        console.log('pan', dx, dy);
    }
};
let end = (point) => {
    // console.log('end', point.clientX, point.clientY);

    if (isTap) {
        console.log('tap');
        clearTimeout(handler);
    }

    if (isPan) {
        console.log('panend');
    }

    if (isPress) {
        console.log('pressend');
    }
};
let cancel = (point) => {
    // console.log('cancel', point.clientX, point.clientY);
    clearTimeout(handler);
};
