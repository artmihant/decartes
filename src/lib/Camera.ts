import Vector from "./Vector"
import type {pair, Point} from '../interfaces'


export default class Camera {
    default = {
        center: [0,0] as pair,
        scale: 1, 
        screen: [100, 100] as pair
    }

    center: Vector
    scale: number
    screen: Vector

    constructor(){
        this.center = new Vector(this.default.center)
        this.screen = new Vector(this.default.screen)
        this.scale = this.default.scale
    }

    get drawCenter(){
        return this.center.times(this.drawScale).sub(this.screen.times(0.5))
    }

    get drawScale(){
        return this.scale*Math.min(this.screen.x, this.screen.y)/2
    }

    loc(pointer: Point){
        pointer = new Vector(pointer)
        return pointer.plus(this.drawCenter).times(1/this.drawScale)
    }

    pointer(loc: Point){
        loc = new Vector(loc)
        return loc.times(this.drawScale).minus(this.drawCenter)
    }

    wheel(cursor: Point, factor: number){
        const fixed = this.loc(cursor)
        this.center.mul(factor).sub(fixed.times(factor-1))
        this.scale /= factor
    }

    move(movement: Point){
        movement = new Vector(movement)
        this.center.sub(movement.times(1/this.drawScale))
    }
}
