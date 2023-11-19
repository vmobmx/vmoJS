function pxToInt(value) {
    let int = 0;
    let k = 1;
    for(let i = value.length - 3; i >= 0; i--) {
        //console.log(value.charAt(i) * k);
        int += value.charAt(i) * k;
        k *= 10;
    }
    //console.log(int);
    return int;
}

class Scene {
    constructor(gravityAcceleration, windage) {
        this.gravityAcceleration = gravityAcceleration;
        this.windage = windage;
    }
    init() {
        this.sceneID = document.getElementById('scene');
        this.sceneID.style.position = 'relative';
        this.sceneID.style.width = '100%';
        this.sceneID.style.height = '100%';
    }
}

class Object {
    constructor(objectID, isPhysical, collision, width, height, x, y) {
        this.objectID = objectID;
        this.isPhysical = isPhysical;
        this.collision = collision;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }

    init(gravityAcceleration) {
        this.objectID.style.position = 'absolute';
        this.objectID.style.width = this.width;
        this.objectID.style.height = this.height;
        this.objectID.style.left = this.x;
        this.objectID.style.top = this.y;   
    }

    changeVerticalAcceleration(acceleration) {
        this.verticalAcceleration = acceleration;
    }

    changeGorizontalAcceleration(acceleration) {
        this.gorizontalAcceleration = acceleration;
    }

    move() {
        this.objectID.style.top = pxToInt(this.objectID.style.top) + this.verticalAcceleration + 'px';
        this.objectID.style.left = pxToInt(this.objectID.style.left) + this.gorizontalAcceleration + 'px';
    }
}

function checkCollision(object1, object2) {
    console.log(object1.verticalAcceleration);
    if(pxToInt(object1.objectID.style.top) + pxToInt(object1.objectID.style.height) - pxToInt(object2.objectID.style.top) >= object1.verticalAcceleration) {
        object1.changeVerticalAcceleration(0);
    }
   if(pxToInt(object1.objectID.style.left) + pxToInt(object1.objectID.style.width) -  pxToInt(object2.objectID.style.left) >= object1.gorizontalAcceleration) {  
        object1.changeGorizontalAcceleration(0);
    }
}