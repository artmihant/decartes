import Vector from "./Vector";
import type Camera from './Camera'
import type {Geometry, Point} from '../interfaces/Decartes'


export class LineSegmentGeometry implements Geometry {

    points: { a: Vector , b: Vector}

    view_points: { a: Vector , b: Vector}
    
    constructor(points: {a: Point, b: Point}) {

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
        const {a,b} = this.view_points
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
    }

    set_view_points(camera: Camera){

        this.view_points.a = camera.pointer(this.points.a)
        this.view_points.b = camera.pointer(this.points.b)

    }
}
