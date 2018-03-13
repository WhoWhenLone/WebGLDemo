
//创建粒子
function createSprites()
{
    //创建粒子材质
    var i=1;
    for (var y = 0; y < 201; y++) {
        var material = new THREE.SpriteMaterial({color:0xff0000*Math.random()});
        //创建粒子
        var sprite = new THREE.Sprite(material);
        sprite.scale.set(0.1,0.1,0.1);
        sprites.add(sprite);
        i++;
    }
    for (var y = 0; y < 201; y++) {
        var material = new THREE.SpriteMaterial({color:0xffffff});
        //创建粒子
        var sprite = new THREE.Sprite(material);
        sprite.scale.set(0.1,0.1,0.1);
        centersprites.add(sprite);
        i++;
    }
}

//添加粒子
function addsprite() {
    //每次添加进场景的位置
    sprites.position.set(jumper.position.x,jumper.position.y,jumper.position.z);
    scene.add(sprites);
    offsetsprite();
}

function addcenter() {
    centersprites.position.set(jumper.position.x,2.5,jumper.position.z);
    scene.add(centersprites);
    add();
}
function  add() {
    for(var i=0;i<centersprites.children.length;i++)
    {
        centersprites.children[i].scale.set(0.2,0.2,0.2);
        centermove(0,0,0,centersprites.children[i]);
    }
}
//移动粒子
function offsetsprite() {

    for(var i=0;i<sprites.children.length;i++)
    {
        pointmove(0,0,0,sprites.children[i]);
    }
}
//移除粒子
function removesprite() {
    TWEEN.removeAll();
    scene.remove(sprites);
}

//平滑移动
function pointmove( mx, my, mz, point) {

        let ad = Math.PI / 180 * (360 * Math.random());
        let bd = Math.PI / 180 * (360 * Math.random());
    point.position.set(5 * Math.cos(ad)*Math.cos(bd), 5* Math.cos(ad)*Math.sin(bd), 5 * Math.sin(ad));
    var tween = new TWEEN.Tween( point.position ).to( {
        x: mx,
        y: my,
        z: mz }, 1000 )
        .easing( TWEEN.Easing.Linear.None).start();
    tween.repeat(Infinity); // repeats forever
};
//落到中心时的粒子散开
function  centermove(mx,my,mz,point) {
    //平滑移动
        let ad = Math.PI / 180 * (360 * Math.random());
        let bd = Math.PI / 180 * (360 * Math.random());
        point.position.set(mx, 2.5,mz );
        var a=1.5* Math.random();
        var tween = new TWEEN.Tween( point.position ).to( {
            x: (5+a)* Math.cos(ad),
            y: 2.5,
            z: (5+a) * Math.sin(ad)}, 500 ).onComplete(function () {
            scene.remove(centersprites);
            TWEEN.removeAll();
        })
            .easing( TWEEN.Easing.Linear.None).start();
        // tween.repeat(Infinity); // repeats forever
}