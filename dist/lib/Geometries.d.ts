import Vector from "./Vector";
import type Camera from './Camera';
import type { Geometry, Point } from '../interfaces/Decartes';
export declare class LineSegmentGeometry implements Geometry {
    points: {
        a: Vector;
        b: Vector;
    };
    view_points: {
        a: Vector;
        b: Vector;
    };
    constructor(points: {
        a: Point;
        b: Point;
    });
    draw(ctx: CanvasRenderingContext2D): void;
    set_view_points(camera: Camera): void;
}
