import { Point } from './point';
import { Shape } from './shape';

export class Triangle extends Shape {
    constructor(point1: Point, point2: Point, point3: Point)
    constructor(point1: Point, point2: Point, point3: Point, color: string, filled: boolean)
    constructor(point1: Point, point2: Point, point3: Point, color?: string, filled?: boolean) {
        if(color && filled) {
            super([point1, point2, point3], color, filled);
        } else {
            super([point1, point2, point3])
        } 
    }

    public toString() {
        const points = this.points.reduce((acc, curr, idx) => {
            return acc.concat(`v${idx+1}=(${curr.x}, ${curr.y})`)
        }, []);
        
        return `Triangle[${points.join(',')}]`;
    }

    public getType(): any {
        const sides = this.points.map((point: Point, idx, array): number => {
            if(idx === array.length - 1) {
                return +point.distance(array[0]).toFixed(1)
            }
            return +point.distance(array[idx+1]).toFixed(1)
        })

        if (sides.every(el => el > 0)) {
            const size = new Set(sides).size
            if (size === 1) return "equilateral triangle";
                else if (size === 2) return "isosceles triangle";
                else return "scalene triangle";
        } else {
            return "invalid";
        }
    }
}
