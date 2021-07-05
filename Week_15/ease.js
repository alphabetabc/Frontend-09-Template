const cubicBezier = (p1x, p1y, p2x, p2y) => {
    let cx = 3.0 * p1x;
    let bx = 3.0 * (p2x - p1x) - cx;
    let ax = 1.0 - cx - bx;
    let cy = 3.0 * p1y;
    let by = 3.0 * (p2y - p1y) - cy;
    let ay = 1.0 - cy - by;

    const action = {
        sampleCurveX: (t) => {
            //贝赛尔曲线t时刻的坐标点的X坐标
            return ((ax * t + bx) * t + cx) * t;
        },
        sampleCurveY: (t) => {
            //贝赛尔曲线t时刻的坐标点的y坐标
            return ((ay * t + by) * t + cy) * t;
        },
    };

    return function solve(t) {
        return action.sampleCurveY(action.sampleCurveX(t));
    };
};

export const linear = (v) => v;
export const ease = cubicBezier(0.25, 0.2, 0.25, 1);
export const easeIn = cubicBezier(0.42, 0, 1, 1);
export const easeOut = cubicBezier(0, 0, 0.58, 1);
export const easeInOut = cubicBezier(0.42, 0, 0.58, 1);
