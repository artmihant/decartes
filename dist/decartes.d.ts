import Vector from './lib/Vector';
import Color from './lib/Color';
import Camera from './lib/Camera';
import Scene from './lib/Scene';
import { LineSegmentGeometry } from './lib/Geometries';
import { LineMaterial } from './lib/Materials';
import { LineSegment, DrawObject } from './lib/DrawObjects';
export { Vector, Color, Camera, Scene, LineSegmentGeometry, LineMaterial, DrawObject, LineSegment };
declare const _default: {
    Vector: typeof Vector;
    Color: typeof Color;
    Camera: typeof Camera;
    Scene: typeof Scene;
    LineSegmentGeometry: typeof LineSegmentGeometry;
    LineMaterial: typeof LineMaterial;
    DrawObject: typeof DrawObject;
    LineSegment: typeof LineSegment;
};
export default _default;