import Camera from "./Camera";
import type {DrawObject} from "./DrawObjects";

export default class Scene {

    camera: Camera
    canvas: HTMLCanvasElement
    viewObjects: DrawObject[]
    ctx: CanvasRenderingContext2D | null

    constructor() {
        this.camera = new Camera()

        this.canvas = document.createElement('canvas');

        this.viewObjects = []

        this.ctx = null;

    }

    add(obj: DrawObject) {
        this.viewObjects.push(obj)
    }

    setCanvas(canvasContainer: HTMLElement){
        canvasContainer.appendChild(this.canvas)
        this.ctx = this.canvas.getContext('2d');
        const width  = canvasContainer.clientWidth;
        const height = canvasContainer.clientHeight;

        this.canvas.width  = width;
        this.canvas.height = height;
        this.camera.screen.set(width, height)
    }

    draw(){
        if(this.ctx){
            this.ctx.clearRect(0, 0, this.canvas.width , this.canvas.height);
            this.viewObjects.forEach(obj => obj.draw(this))
        }
    }
}
