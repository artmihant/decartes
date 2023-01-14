import type {pair, Point} from '../interfaces/Decartes'

export default class Vector {

    x: number = 0;
    y: number = 0;

    isVector = true

    constructor(point?: Point) {
        if(Vector.isVector(point)){
            this.set(point.x, point.y)
        }else if(Vector.isPair(point)){
            this.set(...point)
        }
    }


    static isVector(obj: any): obj is Vector{
        return obj instanceof Vector
    }
    
    static isPair(obj: any): obj is pair{
        return Array.isArray(obj) && obj.length == 2
    }

    static isPoint(obj: any): obj is Point{
        return Vector.isVector(obj) || Vector.isPair(obj)
    }

    set(x: number,y: number){
        this.x = x
        this.y = y
        return this
    }

    setScalar(s: number) {
		this.x = s;
		this.y = s;
		return this;
	}

    clone(){
        return new Vector(this)
    }

    addScaledVector(other:Point, s:number){
        let v: Vector = new Vector(other)
        this.x += v.x * s;
		this.y += v.y * s;
    }

    add(other: Point){
        let v: Vector = new Vector(other)
        this.x += v.x;
		this.y += v.y;
        return this
    }

    addScalar(s: number){
        this.x += s;
		this.y += s;
        return this
    }

	sub(other: Point){
        let v: Vector = new Vector(other)
        this.x -= v.x;
		this.y -= v.y;
        return this
    }

    subScalar(s: number) {
		this.x -= s;
		this.y -= s;
		return this;

	}

    mul(s: number){
        this.x *= s
        this.y *= s
        return this
    }

    transform(matrix: [pair, pair]){
        let {x, y} = this
        this.x = x*matrix[0][0] + y*matrix[0][1]
        this.y = x*matrix[1][0] + y*matrix[1][1]
        return this
    }

	floor() {
		this.x = Math.floor( this.x );
		this.y = Math.floor( this.y );
		return this;
	}

	ceil() {
		this.x = Math.ceil( this.x );
		this.y = Math.ceil( this.y );
		return this;
	}

    round() {
		this.x = Math.round( this.x );
		this.y = Math.round( this.y );
		return this;
	}    


	negate() {
		this.x = - this.x;
		this.y = - this.y;
		return this;
	}

	dot(other: Point) {
        let v: Vector = new Vector(other)
		return this.x * v.x + this.y * v.y;
	}

	cross(other: Point) {
        let v: Vector = new Vector(other)
		return this.x * v.y - this.y * v.x;
	}

    get length(){
        return Math.sqrt(this.dot(this))
    }

    set length(length: number){
        this.normalize().mul(length);
    }

    get pair(): pair {
        return [this.x, this.y]
    }


    distance(other: Point){
        return this.minus(other).length
    }

    plus(other: Point){
        return this.clone().add(other)
    }

    minus(other: Point){
        return this.clone().sub(other)
    }

    times(num: number){
        return this.clone().mul(num)
    }

    normalize() {
		return this.mul(this.length ? 1/this.length : 1 );
	}

    lerp(other: Point, alpha: number) {
        let v: Vector = new Vector(other)
		this.x += ( v.x - this.x ) * alpha;
		this.y += ( v.y - this.y ) * alpha;
		return this;
	}

    equals(other: Point) {
        let v: Vector = new Vector(other)
		return ( ( v.x === this.x ) && ( v.y === this.y ) );
	}

	rotate(angle:number, other: Point = [0, 0]) {
        let v: Vector = new Vector(other)

		const c = Math.cos( angle ), s = Math.sin( angle );
		const x = this.x - v.x;
		const y = this.y - v.y;

		this.x = x * c - y * s + v.x;
		this.y = x * s + y * c + v.y;

		return this;
	}

	random() {
		this.x = Math.random();
		this.y = Math.random();
		return this;
	}

	*[ Symbol.iterator ]() {
		yield this.x;
		yield this.y;
	}

}


