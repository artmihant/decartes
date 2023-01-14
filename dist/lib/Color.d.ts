import type { triple } from '../interfaces/Decartes';
export default class Color {
    r: number;
    g: number;
    b: number;
    constructor(data?: string | triple | Color);
    set(r: number, g: number, b: number): this;
    get rgb(): triple;
    set rgb(data: triple);
    get hex(): string;
    set hex(data: string);
    static isColor(obj: unknown): obj is Color;
    static isTriple(obj: unknown): obj is triple;
    clone(): Color;
    mix(other: Color, proportion?: number): Color;
}
