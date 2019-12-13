let pokemon;
function setup() {
    createCanvas(600, 450);
    pokemon = new Pokemon();
} 
function keyPressed() {
    if (key == ' ') {
        pokemon.jump();
    }
}

function draw() {
    background(220);
    pokemon.show();
    pokemon.move();
}  
