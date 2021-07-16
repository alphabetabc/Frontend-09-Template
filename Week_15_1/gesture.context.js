let element = document.documentElement;

const contexts = new Map();

let isListeningMouse = false;

element.addEventListener('mousedown', (event) => {
    console.log(event.button);

    // event.button 保存点击了哪个键
    const context = Object.create(null);
    contexts.set(`mouse${1 << event.button}`, context);

    start(event, context);

    // mousemove里面不分按键
    let mousemove = (ev) => {
        // ev.buttons 记录了哪些键被按下

        let button = 1;
        while (button <= ev.buttons) {
            if (button & ev.buttons) {
                // buttons 的顺序不一致
                let key;
                if (button === 2) {
                    key = 4;
                } else if (button === 4) {
                    key = 2;
                } else {
                    key = button;
                }

                const context = contexts.get(`mouse${key}`);
                move(ev, context);
            }

            button = button << 1;
        }
    };
    let mouseup = (ev) => {
        const context = contexts.get(`mouse${1 << ev.button}`);
        end(ev, context);
        contexts.delete(`mouse${1 << ev.button}`);

        if (ev.buttons === 0) {
            document.removeEventListener('mousemove', mousemove);
            document.removeEventListener('mouseup', mouseup);
            isListeningMouse = false;
        }
    };

    if (!isListeningMouse) {
        document.addEventListener('mousemove', mousemove);
        document.addEventListener('mouseup', mouseup);
        isListeningMouse = true;
    }
});

element.addEventListener('touchstart', (event) => {
    for (let touch of event.changedTouches) {
        let context = Object.create(null);
        contexts.set(touch.identifier, context);
        start(touch, context);
    }
});
element.addEventListener('touchmove', (event) => {
    for (let touch of event.changedTouches) {
        const context = contexts.get(touch.identifier);
        move(touch, context);
    }
});
element.addEventListener('touchend', (event) => {
    for (let touch of event.changedTouches) {
        const context = contexts.get(touch.identifier);
        end(touch, context);
        contexts.delete(touch.identifier);
    }
});
// touch 异常结束
element.addEventListener('touchcancel', (event) => {
    for (let touch of event.changedTouches) {
        const context = contexts.get(touch.identifier);
        cancel(touch, context);
        contexts.delete(touch.identifier);
    }
});

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
    if (!context.isPan && dx ** 2 + dy ** 2 > 100) {
        context.isPan = true;
        context.isTap = false;
        context.isPress = false;

        console.log('panstart');
        clearTimeout(context.handler);
    }

    if (context.isPan) {
        console.log('pan', dx, dy);
    }
};
let end = (point, context) => {
    // console.log('end', point.clientX, point.clientY);

    if (context.isTap) {
        console.log('tap');
        clearTimeout(context.handler);
    }

    if (context.isPan) {
        console.log('panend');
    }

    if (context.isPress) {
        console.log('pressend');
    }
};
let cancel = (point, context) => {
    // console.log('cancel', point.clientX, point.clientY);
    clearTimeout(context.handler);
};
