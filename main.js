function setup() {
    createCanvas(640, 480);
}

function draw() {
    background('#FFFAED');
    var x = mouseX;
    var y = mouseY;
    
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
}
