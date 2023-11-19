const scene = new Scene(5, 5);
scene.init();

const floorID = document.getElementById('floor');
const boxID = document.getElementById('box');
const box1ID = document.getElementById('box1');

const floor = new Object(floorID, false, true, '100%', '5%', '0px', '915px');
const box = new Object(boxID, true, true, '100px', '100px', '100px', '100px');
const box1 = new Object(box1ID, true, true, '200px', '200px', '1000px', '500px');

floor.init();
box.init();
box1.init();

box.changeVerticalAcceleration(7);
box.changeGorizontalAcceleration(2);
box1.changeVerticalAcceleration(7);

// loop

setInterval(() => {
    box.move();
    box1.move();
    checkCollision(box, floor);
    checkCollision(box1, floor);
    checkCollision(box, box1);
}, 5);