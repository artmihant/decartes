import type Scene from './Scene';
import type { Point, Material, LineMaterialConfig, Geometry } from '../interfaces';
export declare class DrawObject {
    geometry: Geometry;
    material: Material;
    type: string;
    constructor(type: string, geometry: Geometry, material: Material);
    draw(scene: Scene): void;
}
export declare class LineSegment extends DrawObject {
    constructor({ a, b }: {
        a: Point;
        b: Point;
    }, materialConfig: LineMaterialConfig);
}
