import { Point } from "./point";

export abstract class Shape {
    protected color: string;
    protected filled: boolean;
    protected points: Point[];

    constructor(points: Point[]);
    constructor(points: Point[], color: string, filled: boolean);
    constructor(points: Point[], color: string = "green", filled: boolean = true) {
        if (points.length < 3) {
            throw new Error('At least 3 points');
        }

        this.points = points;
        this.color = color;
        this.filled = filled
    }

    public toString(): string {
        const formattedPoints: string[] = this.points.map((point: Point) => point.toString());

        return `A Shape with color of ${this.color} and ${this.filled ? 'filled' : 'not filled'}. Points: ${formattedPoints.join(', ')}.`
    }

    public getPerimeter(): number {
        let result = 0;
        for (let i = 0; i < this.points.length; i++) {
            result += this.points[i].distance(this.points[(i + 1) % this.points.length]);
        }
        return result;
    }

    abstract getType(): string;
}
