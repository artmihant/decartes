import Color from "./Color";
import type { Material, LineMaterialConfig } from '../interfaces/Decartes';
export declare class LineMaterial implements Material {
    default: {
        lineColor: string;
        lineWidth: number;
    };
    lineColor: Color;
    lineWidth: number;
    constructor({ lineColor, lineWidth }: LineMaterialConfig);
    draw(ctx: CanvasRenderingContext2D): void;
}
