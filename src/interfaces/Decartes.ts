import type Vector from '../lib/Vector'
import type Color from '../lib/Color'
import Camera from '../lib/Camera'

export type pair = [number, number]
export type triple = [number, number, number]
export type Point = pair | Vector


export interface Material{
    draw(ctx: CanvasRenderingContext2D):void
}

export interface Geometry{
    points: { [s: string]: Vector; }
    view_points: { [s: string]: Vector; }
    set_view_points(camera: Camera): void
    draw (crx: CanvasRenderingContext2D): void 
}


export type LineMaterialConfig = {
    lineColor?: Color | string;
    lineWidth?: number;
}

