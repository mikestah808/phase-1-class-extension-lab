// Your code here


class Polygon{
    constructor(arrOfIntegers){
        // console.log(arrOfIntegers);
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

}


class Square extends Polygon {

}