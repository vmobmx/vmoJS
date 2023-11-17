const scene = new Scene(5, 5);
scene.init();

const floorID = document.getElementById('floor');
const boxID = document.getElementById('box');

const floor = new Object(floorID, false, true, '100%', '5%', '0px', '915px');
const box = new Object(boxID, true, true, '100px', '100px', '100px', '100px');

floor.init();
box.init();

box.giveVerticalAcceleration(5);

// loop

setInterval(() => {
    box.move();
}, 150);