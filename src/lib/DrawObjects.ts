import type {Geometry} from './Geometries'
import {LineSegmentGeometry} from './Geometries'
import {LineMaterial} from './Materials'
import type Scene from './Scene'
import type {Point, Material, LineMaterialConfig} from '../interfaces/Decartes'
import Vector from "./Vector"


export class DrawObject {

    geometry: Geometry
    material: Material

    type: string

    constructor(type: string, geometry: Geometry, material: Material) {
        this.type = type
        this.geometry = geometry
        this.material = material
    }

    draw(scene: Scene){
        if(scene.ctx){
            let camera = scene.camera
            this.material.draw(scene.ctx)
            this.geometry.set_view_points(camera)
            this.geometry.draw(scene.ctx)
        }
    }
}

export class LineSegment extends DrawObject{
    constructor({a,b}: { a: Point; b: Point; }, materialConfig: LineMaterialConfig) {

        super(
            'line',
            new LineSegmentGeometry({
                a: new Vector(a),
                b: new Vector(b)
            }), 
            new LineMaterial(materialConfig)
        );
    }

}