// Your code here


class Polygon{
    constructor(arrOfIntegers){
        this.arrOfIntegers = arrOfIntegers
    }

    get countSides(){
        return this.arrOfIntegers.length;
    }

    get perimeter(){
        // perimeter = (length + width) * 2;
        // calculates the sum of each side (each index of the array) of the polygon
        let sum = this.arrOfIntegers.reduce((a,b) => a + b, 0);
        return sum;
    }

}

class Triangle extends Polygon {
    get isValid(){
        // console.log(this.arrOfIntegers);
        let side1 = this.arrOfIntegers[0]
        let side2 = this.arrOfIntegers[1]
        let side3 = this.arrOfIntegers[2]
        return((side1 + side2 > side3)&&(side1 + side3 > side2)&&(side2 +side3 > side1))

    }
}


class Square extends Polygon {

    get isValid(){
        // console.log(this.arrOfIntegers);
        let side1 = this.arrOfIntegers[0]
        let side2 = this.arrOfIntegers[1]
        let side3 = this.arrOfIntegers[2]
        let side4 = this.arrOfIntegers[3]

        return((side1 === side2)&&(side1=== side3)&&(side1 === side4))
        
    }

    get area(){
        console.log(this.arrOfIntegers);
        let side1 = this.arrOfIntegers[0]
        let side2 = this.arrOfIntegers[1]
        return side1 * side2;
    }
}


let triangle = new Triangle(5)