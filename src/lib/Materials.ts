import Color from "./Color"
import type {Material, LineMaterialConfig} from '../interfaces'

export class LineMaterial implements Material{

    default = {
        lineColor: '#000',
        lineWidth: 1
    }

    lineColor: Color
    lineWidth: number

    constructor({lineColor, lineWidth}: LineMaterialConfig){
        this.lineColor = new Color(lineColor ? lineColor : this.default.lineColor) 
        this.lineWidth = lineWidth ? lineWidth : this.default.lineWidth
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = this.lineColor.hex
    }
}
