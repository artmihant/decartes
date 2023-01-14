import Camera from "./Camera";
import type { DrawObject } from "./DrawObjects";
export default class Scene {
    camera: Camera;
    canvas: HTMLCanvasElement;
    viewObjects: DrawObject[];
    ctx: CanvasRenderingContext2D | null;
    constructor();
    add(obj: DrawObject): void;
    setCanvas(canvasContainer: HTMLElement): void;
    draw(): void;
}
