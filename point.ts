export class Point {
    x: number;
    y: number;

    public constructor(x: number, y: number);
    public constructor(...args: [number, number]) {
        const [ x, y ] = args;
        
        this.x = x || 0;
        this.y = y || 0;
    }

    private calculateDistanceTo(x: number, y: number): number {
        const distance: number = Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2));

        return parseFloat(distance.toFixed(2));
    }

    public toString(): string {
        return `(${this.x}, ${this.y})`;
    }

    public distance(other: Point): number;
    public distance(x: number, y: number): number;
    public distance(...args: any[]) {
        if (args.length === 0) {
            return this.calculateDistanceTo(0, 0);
        }

        if (args.length === 1) {
            const [ other ] = args;

            return this.calculateDistanceTo(other.x, other.y);
        }

        if (args.length === 2) {
            const other = { x: args[0], y: args[1] };

            return this.calculateDistanceTo(other.x, other.y);
        }

        return this.calculateDistanceTo(0, 0)
    }
}
