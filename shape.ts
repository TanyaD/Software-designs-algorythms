import { Point } from "./point";

export abstract class Shape {
    protected color: string;
    protected filled: boolean;
    protected points: Point[];

    constructor(points: Point[]);
    constructor(points: Point[], color: string, filled: boolean);
    constructor(...args: [ Point[], string?, boolean? ]) {
        const [ points, color, filled ] = args;

        if (points.length < 3) {
            throw new Error('At least 3 points');
        }

        if (args.length === 1) {
            this.color = "green";
            this.filled = true;
        }

        if (args.length === 3) {
            this.color = color;
            this.filled = filled;
        }

        this.points = points;
    }

    public toString(): string {
        const formattedPoints: string[] = this.points.map((point: Point) => point.toString());

        return `A Shape with color of ${this.color} and ${this.filled ? 'filled' : 'not filled'}. Points: ${formattedPoints.join(', ')}.`
    }

    public getPerimeter(): number {
        let result = 0;

        for (let i = 0; i < this.points.length; i++) {
            for (let j = i + 1; j < this.points.length; j++) {
                result += this.points[i].distance(this.points[j])
            }
        }

        return result;
    }

    abstract getType(): string;
}
