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
    init(isPhysical, collision, width, height, x, y) {
        this.isPhysical = isPhysical;
        this.collision = collision;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }
}