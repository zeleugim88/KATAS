/* Given an integer n representing the number of sides of a regular polygon,
return the measure of each interior angle. Bonus points: 
implement some of the other functions listed in the linked Wikipedia page!
Example: interiorAngleSize(3) => 60; interiorAngleSize(8) => 135 */
//https://en.wikipedia.org/wiki/Regular_polygon

class RegularPolygon {
    constructor(sideLength, sideNum) {
        this.l = sideLength,
        this.n = sideNum
    }

    interiorAngleSize() {
        const angle = (this.n-2)*180/this.n
        return `internalAngle: ${angle}`
    }

    area() {
        const area = Math.round(1/4*this.n*(this.l**2)*(1/(Math.tan(Math.PI/this.n))),2)
        return `area: ${area}`
    }

    type() {
        switch (this.n) {
            case 3: return "triangle"; break;
            case 4: return "square"; break;
            case 5: return "pentagon"; break;
            case 6: return "hexagon"; break;
            case 7: return "heptagon"; break;
            default: return "too complicated polygon for me"; break;
        }
    }
}

const a = new RegularPolygon(20,3)
console.log([
        a.type(),
        a.interiorAngleSize(),
        a.area()
    ])
