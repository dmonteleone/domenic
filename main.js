var li;
var feed = [];
var numFood = 10;

var a = [1, 2, 3];

function setup() {
    createCanvas(740, 480);
    li = new Lion();
    var p = int(random(0, numFood));
    for (var i = 0; i < numFood; i++) {
        if (i === p) {
            var food = new Food(random(width), random(height));
            food.poisonous = true;
            feed.push(food);
        } else {
            feed.push(new Food(random(width), random(height)));
        }
    }
}

function draw() {
    background('#FFFAED');
    li.display();
    for (var i = 0; i < feed.length; i++) {
        feed[i].display();
    }
}

function mousePressed() {
    li.eat();

}

function mouseReleased() {
    //ellipse(x, y + 40, 40, 60);
}

function Food(x, y) {
    this.x = x;
    this.y = y;
    this.color = color(255, 0, 0);
    this.foodSize = 50;
    this.poisonous = false;
    this.display = function () {
        if (this.poisonous) {
            fill(0, 255, 0);
        } else {
            fill(255, 0, 255);
        }
        ellipse(this.x, this.y, this.foodSize, this.foodSize);
    }
}

function Lion() {
    var diameter = 200;
    var x = mouseX;
    var y = mouseY;
    this.poisonous = false;
    this.getDistance = function (other) {
        var dist = Math.sqrt(Math.pow(x - other.x, 2) + Math.pow(y - other.y, 2));
        return dist;
    }

    this.eat = function () {
        for (var i = 0; i < feed.length; i++) {
            var food = feed[i];
            var d = this.getDistance(food);
            var r1 = food.foodSize / 2;
            var r2 = diameter / 2;
            if (r1 + r2 > d) {
                if (food.poisonous) {
                    window.alert("You have been poisoned");
                    console.log('poison!');
                    Lion.poisonous = true;
                }
                feed.splice(i, 1);
            }
        }
    }

    this.display = function () {
        x = mouseX;
        y = mouseY;

        //mane
        noStroke();
        fill('#b05900');
        ellipse(x, y - 20, 275, 275);

        //earLeft
        fill('#e7af00');
        triangle(x - 40, y - 90, x - 80, y - 50, x - 80, y - 110);

        //earRight
        fill('#e7af00');
        triangle(x + 40, y - 90, x + 80, y - 50, x + 80, y - 110);

        //face
        noStroke();
        fill('#fbbe00');
        ellipse(x, y, 200, 200);

        //nose
        fill('#ff6fd5');
        triangle(x + 30, y + 10, x - 30, y + 10, x, y + 40);

        if (keyIsPressed) {
            fill('#e7af00');
            ellipse(x + 42, y - 26, 50, 50);
            ellipse(x - 42, y - 26, 50, 50);
        } else {
            //eyeLeft
            fill('#FFFFFF');
            ellipse(x + 42, y - 26, 50, 50);

            //pupilLeft
            fill('#b27500');
            ellipse(x + 42, y - 26, 30, 30);

            //eyeRight
            fill('#FFFFFF');
            ellipse(x - 42, y - 26, 50, 50);

            //pupilRight
            fill('#b27500');
            ellipse(x - 42, y - 26, 30, 30);

        }
        //mouth
        if (mouseIsPressed) {
            fill(0);
            ellipse(x, y + 60, 60, 35);
        } else {
            fill('#9a7500');
            triangle(x, y + 40, x - 30, y + 60, x, y + 50);
            triangle(x, y + 40, x + 30, y + 60, x, y + 50);
        }
    };
}
