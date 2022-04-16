const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// set canvas.width and canvas.height to window.innerWidth and window.innerHeight
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// mouse position (x,y)
let mouse = {
    x: undefined,
    y: undefined,
};

// add on mousemove event
window.addEventListener("mousemove", function (e) {
    mouse.x = e.x;
    mouse.y = e.y;
});

// define circle class
class Circle {
    constructor(x, y, radius, startAngle, endAngel, offSet) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.startAngle = startAngle;
        this.endAngel = endAngel;
        this.offSet = offSet;
    }

    // draw circle
    draw = () => {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                ctx.beginPath();
                if (this.radius < 0) {
                    this.radius = 40;
                }
                ctx.arc(
                    this.x + this.offSet,
                    3 * this.y * j + this.offSet,
                    this.radius,
                    this.startAngle,
                    this.endAngel
                );

                ctx.stroke();
            }
        }
        this.update();
    };

    // interactivity
    update = () => {
        if (
            mouse.x - this.x < 80 &&
            mouse.x - this.x > -80 &&
            mouse.y - this.y < 80 &&
            mouse.y - this.y > -80
        ) {
            this.radius = this.radius - 5;
        }
    };
}

// create 10 arrays
let circleArray = [];
for (let i = 0; i < 10; i++) {
    const start = { x: 40, y: 40 };
    const unit = 30;
    circleArray.push(
        new Circle(3 * start.x * i + unit, start.y, 40, 0, 2 * Math.PI, 100)
    );
}

function animate() {
    requestAnimationFrame(animate);
    circleArray.forEach((circle) => {
        return circle.draw();
    });
}

animate();
