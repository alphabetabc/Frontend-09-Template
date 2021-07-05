import * as ease from './ease';

const TICK = Symbol('tick');
const TICK_HANDLER = Symbol('tick-handler');

const ANIMATIONS = Symbol('animation');
const START_TIME = Symbol('ADD_TIME');
const PAUSE_START = Symbol('PAUSE_START');
const PAUSE_TIME = Symbol('PAUSE_TIME');

class Timeline {
    [ANIMATIONS] = new Set();
    [START_TIME] = new Map();

    state = 'initted';

    add(animation, startTime = Date.now()) {
        this[ANIMATIONS].add(animation);
        this[START_TIME].set(animation, startTime);
    }

    start() {
        if (this.state !== 'initted') {
            return;
        }

        this.state = 'started';

        let startTime = Date.now();
        this[PAUSE_TIME] = 0;

        this[TICK] = () => {
            let now = Date.now();
            for (let animation of this[ANIMATIONS]) {
                let t;

                if (this[START_TIME].get(animation) < startTime) {
                    t = now - startTime - this[PAUSE_TIME] - animation.delay;
                } else {
                    t = now - this[START_TIME].get(animation) - this[PAUSE_TIME] - animation.delay;
                }

                if (animation.duration < t) {
                    this[ANIMATIONS].delete(animation);
                    t = animation.duration;
                }

                if (t > 0) {
                    animation.tick(t);
                }
            }

            this[TICK_HANDLER] = requestAnimationFrame(this[TICK]);
        };

        this[TICK]();
    }

    pause() {
        if (this.state !== 'started') {
            return;
        }

        this.state = 'paused';

        // 暂停的时间
        this[PAUSE_START] = Date.now();
        cancelAnimationFrame(this[TICK_HANDLER]);
    }

    resume() {
        if (this.state !== 'paused') {
            return;
        }

        this.state = 'started';

        // 启动时间
        this[PAUSE_TIME] += Date.now() - this[PAUSE_START];
        this[TICK]();
    }

    stop() {
        this.pause();
        this.state = 'initted';
        this[PAUSE_TIME] = 0;
        this[PAUSE_START] = 0;
        this[TICK_HANDLER] = null;
        this[ANIMATIONS] = new Set();
        this[START_TIME] = new Map();
    }
}

class Animation {
    constructor(object, property, startValue, endValue, duration, delay, timingFunction, template) {
        this.object = object;
        this.property = property;
        this.startValue = startValue;
        this.endValue = endValue;
        this.duration = duration;
        this.timingFunction = timingFunction || ease.linear;

        this.delay = delay;

        this.template = template || ((v) => v);
        console.log(this.timingFunction);
    }

    tick(time) {
        const range = this.endValue - this.startValue;
        const progress = this.timingFunction(time / this.duration);

        this.object[this.property] = this.template(this.startValue + range * progress);
    }
}

export { Timeline, Animation };
