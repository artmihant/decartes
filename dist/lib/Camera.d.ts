import Vector from "./Vector";
import type { pair, Point } from '../interfaces/Decartes';
export default class Camera {
    default: {
        center: pair;
        scale: number;
        screen: pair;
    };
    center: Vector;
    scale: number;
    screen: Vector;
    constructor();
    get drawCenter(): Vector;
    get drawScale(): number;
    loc(pointer: Point): Vector;
    pointer(loc: Point): Vector;
    wheel(cursor: Point, factor: number): void;
    move(movement: Point): void;
}
