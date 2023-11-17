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

    giveVerticalAcceleration(acceleration) {
        this.verticalAcceleration += acceleration;
    }

    giveGorizontalAcceleration(acceleration) {
        this.gorizontalAcceleration = acceleration;
    }

    move() {
        this.objectID.style.top += this.verticalAcceleration;
    }
}