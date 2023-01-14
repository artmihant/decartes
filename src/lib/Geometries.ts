import Vector from "./Vector";
import type Camera from './Camera'
import type {Point} from '../interfaces/Decartes'

export abstract class Geometry{

    points: { [s: string]: Vector; } = {}

    view_points: { [s: string]: Vector; } = {}

    set_view_points(camera: Camera){
        for (let key in this.points){
            this.view_points[key] = camera.pointer(this.points[key])
        }
    }
    draw(ctx: CanvasRenderingContext2D){}
}


export class LineSegmentGeometry extends Geometry {

    points: { a: Vector , b: Vector}

    view_points: { a: Vector , b: Vector}
    
    constructor(points: {a: Point, b: Point}) {
        super()

        this.points = {
            a: new Vector(points.a),
            b: new Vector(points.b)
        }

        this.view_points = {
            a: new Vector(),
            b: new Vector()
        }
    }

    draw(ctx: CanvasRenderingContext2D){
        let {a,b} = this.view_points
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
    }
}
