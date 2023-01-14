import type Vector from '../lib/Vector'
import type Color from '../lib/Color'

export type pair = [number, number]
export type triple = [number, number, number]
export type Point = pair | Vector


export interface Material{
    draw(ctx: CanvasRenderingContext2D):void
}

export type LineMaterialConfig = {
    lineColor?: Color | string;
    lineWidth?: number;
}
