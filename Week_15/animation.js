const TICK = Symbol('tick');
const TICK_HANDLER = Symbol('tick-handler');

const ANIMATIONS = Symbol('animation');
const START_TIME = Symbol('ADD_TIME');

class Timeline {
    [ANIMATIONS] = new Set();
    [START_TIME] = new Map();

    add(animation, startTime = Date.now()) {
        this[ANIMATIONS].add(animation);
        this[START_TIME].set(animation, startTime);
    }

    start() {
        let startTime = Date.now();

        this[TICK] = () => {
            let now = Date.now();
            for (let animation of this[ANIMATIONS]) {
                let t;

                if (this[START_TIME].get(animation) < startTime) {
                    t = now - startTime;
                } else {
                    t = this[START_TIME].get(animation);
                }

                if (animation.duration < t) {
                    this[ANIMATIONS].delete(animation);
                    t = animation.duration;
                }
                animation.tick(t);
            }

            this[TICK_HANDLER] = requestAnimationFrame(this[TICK]);
        };

        this[TICK]();
    }

    pause() {
        cancelAnimationFrame(this[TICK_HANDLER]);
    }

    resume() {
        this[TICK]();
    }

    stop() {}
}

class Animation {
    constructor(object, property, startValue, endValue, duration, delay, timingFunction, template) {
        this.object = object;
        this.property = property;
        this.startValue = startValue;
        this.endValue = endValue;
        this.duration = duration;
        this.timingFunction = timingFunction;

        this.delay = delay;

        this.template = template;

        console.log(this);
    }

    tick(time) {
        // console.log('log----------ani-tick');
        const range = this.endValue - this.startValue;
        this.object[this.property] = this.startValue + (range * time) / this.duration;
    }
}

export { Timeline, Animation };
