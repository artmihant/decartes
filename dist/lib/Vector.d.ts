import type { pair, Point } from '../interfaces/Decartes';
export default class Vector {
    x: number;
    y: number;
    isVector: boolean;
    constructor(point?: Point);
    static isVector(obj: unknown): obj is Vector;
    static isPair(obj: unknown): obj is pair;
    static isPoint(obj: unknown): obj is Point;
    set(x: number, y: number): this;
    setScalar(s: number): this;
    clone(): Vector;
    addScaledVector(other: Point, s: number): void;
    add(other: Point): this;
    addScalar(s: number): this;
    sub(other: Point): this;
    subScalar(s: number): this;
    mul(s: number): this;
    transform(matrix: [pair, pair]): this;
    floor(): this;
    ceil(): this;
    round(): this;
    negate(): this;
    dot(other: Point): number;
    cross(other: Point): number;
    get length(): number;
    set length(length: number);
    get pair(): pair;
    distance(other: Point): number;
    plus(other: Point): Vector;
    minus(other: Point): Vector;
    times(num: number): Vector;
    normalize(): this;
    lerp(other: Point, alpha: number): this;
    equals(other: Point): boolean;
    rotate(angle: number, other?: Point): this;
    random(): this;
    [Symbol.iterator](): Generator<number, void, unknown>;
}
