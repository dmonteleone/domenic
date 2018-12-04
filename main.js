var li;
var feed = [];
var numFood = 10;

var a = [1,2,3];

function setup() {
    createCanvas(740, 480);
    li = new Lion();
    for(var i = 0; i < numFood; i++) {
        feed.push(new Food(random(width), random(height)));
    }
}

function draw() {
    background('#FFFAED');
    li.display();
    for(var i = 0; i < numFood; i++) {
        feed[i].display();
    }
}

function mousePressed() {
    li.eat();
}

function Food(x,y) {
    this.x = x;
    this.y = y;
    this.color = color(255, 0, 0);
    
    this.display = function() {
        var foodSize = 50;
        fill(this.color);
        ellipse(this.x, this.y, foodSize, foodSize);
    }
}

function Lion() {

    var x = mouseX;
    var y = mouseY;
    
    this.getDistance = function(other) {
        var dist = Math.sqrt(Math.pow(x - other.x, 2) + Math.pow(y - other.y, 2));
    }
    
    this.eat = function() {
        for(var i = 0; i < numFood; i++) {
            var food = feed[i];
            var d = this.getDistance(food);
            var r1 = food.foodSize/2;
            var r2 = diameter/2;
            if(r1 + r2 > d) {
                console.log('hit');
            }
        }
    }

    this.display = function() {
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

        //mouth
        fill('#9a7500');
        triangle(x, y + 40, x - 30, y + 60, x, y + 50);
        triangle(x, y + 40, x + 30, y + 60, x, y + 50);
    };
}
