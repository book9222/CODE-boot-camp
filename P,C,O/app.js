function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function () {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    };
    color.hex = function () {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return color;
}
const firstColor = makeColor(35, 255, 150);
//firstColor.rgb();
//firstColor.hex();



//****** Constructor Function ******//
function conColor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
    //console.log(this);
}

conColor.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
}
conColor.prototype.hex = function () {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
conColor.prototype.rgba = function (a = 1.0) {
    const { r, g, b } = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

const color1 = new conColor(40, 100, 100);



//******* Class ********//
class Color {
    constructor(r, g, b, name) {
        //console.log(r, g, b);
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    greet() {
        return `Hello from ${this.name}`
    }
    rgb() {
        const {r, g, b} = this;
        return `rgb(${r}, ${g}, ${b})`;
    }
    setBG() {
        document.body.style.backgroundColor = this.rgb();
    }
}

const c1 = new Color(255, 67, 68, "tomato");
const c2 = new Color(100, 210, 121, "grass");
