//初始化几何体
function LoadMyMesh()
{
    //基础的几何体 其他的几何体由改几何体克隆得到
    //方块 蓝色
    var basicCubeGeometry_0 = new THREE.CubeGeometry(10,10,10);
    var basicCubeMaterial_0 = new THREE.MeshLambertMaterial({color:0x55bfc8});
    basicCube_0 = new THREE.Mesh(basicCubeGeometry_0,basicCubeMaterial_0);
    basicCube_0.castShadow = true;
    basicObjArray[0] = basicCube_0;
    //绿色
    var basicCubeGeometry_1 = new THREE.CubeGeometry(10,10,10);
    var basicCubeMaterial_1 = new THREE.MeshPhongMaterial({color:0x00ab51});
    basicCube_1 = new THREE.Mesh(basicCubeGeometry_1,basicCubeMaterial_1);
    basicCube_1.castShadow = true;
    basicObjArray[2] = basicCube_1;
    //黄色
    var basicCubeGeometry_2 = new THREE.CubeGeometry(10,10,10);
    var basicCubeMaterial_2 = new THREE.MeshPhongMaterial({color:0xd58007});
    basicCube_2 = new THREE.Mesh(basicCubeGeometry_2,basicCubeMaterial_2);
    basicCube_2.castShadow = true;
    basicObjArray[4] = basicCube_2;
    //红色
    var basicCubeGeometry_3 = new THREE.CubeGeometry(10,10,10);
    var basicCubeMaterial_3 = new THREE.MeshPhongMaterial({color:0xe8410b});
    basicCube_3 = new THREE.Mesh(basicCubeGeometry_3,basicCubeMaterial_3);
    basicCube_3.castShadow = true;
    basicObjArray[6] = basicCube_3;
    //灰色
    var basicCubeGeometry_4 = new THREE.CubeGeometry(10,10,10);
    var basicCubeMaterial_4 = new THREE.MeshPhongMaterial({color:0x999999});
    basicCube_4 = new THREE.Mesh(basicCubeGeometry_4,basicCubeMaterial_4);
    basicCube_4.castShadow = true;
    basicObjArray[8] = basicCube_4;
    //圆柱 蓝色
    var basicCylinderGeometry_0 = new THREE.CylinderGeometry(10,10,10,25);
    var basicCylinderMaterial_0 = new THREE.MeshPhongMaterial({color:0x55bfc8});
    basicCylinder_0 = new THREE.Mesh(basicCylinderGeometry_0,basicCylinderMaterial_0);
    basicCylinder_0.castShadow = true;
    basicObjArray[1] = basicCylinder_0;
    //绿色圆柱
    var basicCylinderGeometry_1 = new THREE.CylinderGeometry(10,10,10,25);
    var basicCylinderMaterial_1 = new THREE.MeshPhongMaterial({color:0x00ab51});
    basicCylinder_1 = new THREE.Mesh(basicCylinderGeometry_1,basicCylinderMaterial_1);
    basicCylinder_1.castShadow = true;
    basicObjArray[3] = basicCylinder_1;
    //黄色圆柱
    var basicCylinderGeometry_2 = new THREE.CylinderGeometry(10,10,10,25);
    var basicCylinderMaterial_2 = new THREE.MeshPhongMaterial({color:0xd58007});
    basicCylinder_2 = new THREE.Mesh(basicCylinderGeometry_2,basicCylinderMaterial_2);
    basicCylinder_2.castShadow = true;
    basicObjArray[5] = basicCylinder_2;
    //红色圆柱
    var basicCylinderGeometry_3 = new THREE.CylinderGeometry(10,10,10,25);
    var basicCylinderMaterial_3 = new THREE.MeshPhongMaterial({color:0xe8410b});
    basicCylinder_3 = new THREE.Mesh(basicCylinderGeometry_3,basicCylinderMaterial_3);
    basicCylinder_3.castShadow = true;
    basicObjArray[7] = basicCylinder_3;
    //灰色圆柱
    var basicCylinderGeometry_4 = new THREE.CylinderGeometry(10,10,10,25);
    var basicCylinderMaterial_4 = new THREE.MeshPhongMaterial({color:0x999999});
    basicCylinder_4 = new THREE.Mesh(basicCylinderGeometry_4,basicCylinderMaterial_4);
    basicCylinder_4.castShadow = true;
    basicObjArray[9] = basicCylinder_4;

    //初始基本方块
    var firstCube = basicObjArray[0].clone();
    firstCube.scale.set(0.5,0.4,0.5);
    firstCube.position.set(0,2.0,0);
    scene.add(firstCube);
    //跳动的方块
    var jumpGeometry = new THREE.CubeGeometry(2,3,2);
    var jumpMaterial = new THREE.MeshPhongMaterial({color:0xff0000});
    jumper = new THREE.Mesh(jumpGeometry,jumpMaterial);
    jumper.position.set(0,5.5,0);
    scene.add(jumper);
}

//物体下落方法
function CubeDown(object)
{
    object.position.y=20;
    downTween=new TWEEN.Tween(object.position);
    downTween.to({
        x:object.position.x,
        y:2.5,
        z:object.position.z
    },3000).easing(TWEEN.Easing.Bounce.Out).start(2000*objCount);
    //downTween.repeat(Infinity);
}

//添加下一个几何体的方法
function Add3DObj()
{
    currScale = 0.4+Math.round(Math.random()*4)/10;
    console.log("currScale"+currScale);
    downTween=null;
    currObjId = Math.round(Math.random()*10);
    if(currObjId==10)
    {
        currObjId=9;
    }
    currXORZ = Math.round(Math.random()*10);
    if(currXORZ<5)
    {
        nextObjPosition[0]=nextObjPosition[0] + 10*(1+currScale);
        console.log("xxxxx方向增加一个几何体");
    }
    else
    {
        nextObjPosition[2]=nextObjPosition[2] + 10*(1+currScale);
        console.log("zzzz方向增加一个几何体");
    }
    console.log(currObjId);
    ObjArray[objCount] = basicObjArray[currObjId].clone();
    ObjArray[objCount].scale.set(currScale,0.4,currScale);
    ObjArray[objCount].position.set(nextObjPosition[0],2.0,nextObjPosition[2]);
    ObjArray[objCount].castShadow = true;
    scene.add(ObjArray[objCount]);
    //CubeDown(ObjArray[objCount]);
    console.log("objCount"+objCount);
    objCount++;

    console.log("场景中的物体个数"+scene.children.length);

     renderer.render(scene,camera);
}
function onMouseDown()
{
    console.log("按下鼠标");
    upAndDown=1;
    goSpeed=0;
    speedState =true;
}

function onMouseUp()
{
    console.log("抬起鼠标");
    speedState =false;
    console.log("gospeed    "+goSpeed);
    jumpState=true;
    jumper.scale.y=1.0;
    jumper.position.y=5.5;
}

function jump()
{
    if(jumpState==true)
    {
        //上升到最高点 改变状态位
        if(jumper.position.y>=11.5 )
        {
            upAndDown=2;
        }
        //物体落在方块
        //在其中判断碰撞
        if(jumper.position.y<5.4)
        {
            upAndDown=0;
            
            if(currXORZ<5)
            {
                //跳过头
                if(jumper.position.x>nextObjPosition[0]+5*currScale)
                {
                    alert("游戏失败   X轴方向跳过头");
                }
                //跳近了
                else if(jumper.position.x<nextObjPosition[0]-5*currScale)
                {
                    alert("游戏失败   X轴方向跳近了");
                }
                //正常
                else
                {
                    //增加分数
                    document.getElementById("sorce2").innerHTML=objCount;
                    //调用方法 添加下一个方块
                    setTimeout( Add3DObj,1000);
                    cameraState = true;
                    jumpState=false;
                }
            }
            else if(currXORZ>5)
            {
                //跳过头
                if(jumper.position.z>nextObjPosition[2]+5*currScale)
                {
                    alert("游戏失败   Z轴方向跳过头");
                }
                //跳近了
                else if(jumper.position.z<nextObjPosition[2]-5*currScale)
                {
                    alert("游戏失败   Z轴方向跳近了");
                }
                //正常
                else
                {
                    //增加分数
                    document.getElementById("sorce2").innerHTML=objCount;
                    //调用方法 添加下一个方块
                    setTimeout( Add3DObj,1000);
                    cameraState = true;
                    jumpState=false;
                }
            }
        }
        //x方向增加
        if(currXORZ<5)
        {
            switch (upAndDown)
            {
                case 1:
                    jumper.position.y+=0.2;
                    jumper.rotation.z-=Math.PI/30;
                    jumper.position.x+=10/50*goSpeed/30;
                    jumper.position.z+=(nextObjPosition[2]-jumper.position.z)/30;
                    break;
                case 2:
                    jumper.position.y-=0.2;
                    jumper.rotation.z-=Math.PI/30;
                    jumper.position.x+=10/50*goSpeed/30;
                    jumper.position.z+=(nextObjPosition[2]-jumper.position.z)/30;
                    break;
                default:
                    jumper.position.y=5.5;
                    jumper.rotation.z=0;
                    jumper.rotation.x=0;
            }
            renderer.render(scene, camera);
        }
        //z方向增加
        else
        {
            switch (upAndDown)
            {
                case 1:
                    jumper.position.y+=0.2;
                    jumper.rotation.x+=Math.PI/30;
                    jumper.position.z+=10/50*goSpeed/30;
                    jumper.position.x+=(nextObjPosition[0]-jumper.position.x)/30;
                    break;
                case 2:
                    jumper.position.y-=0.2;
                    jumper.rotation.x+=Math.PI/30;
                    jumper.position.z+=10/50*goSpeed/30;
                    jumper.position.x+=(nextObjPosition[0]-jumper.position.x)/30;
                    break;
                default:
                    jumper.position.y=5.5;
                    jumper.rotation.z=0;
                    jumper.rotation.x=0;
            }
            renderer.render(scene, camera);
        }
    }
}
function changeSpeed()
{
    if(speedState==true)
    {
        goSpeed++;
        if(jumper.scale.y>=0.1)
        {
            jumper.scale.y-=0.01;
            jumper.position.y-=0.01;
        }
    }
}
function changeCamera()
{
    //摄像机位置需要改变
    if(cameraState)
    {
        //x轴移动
        if(currXORZ<5)
        {
            if((cameraPosition_x-signcameraPosition_x)<=10*(1+currScale))
            {
                cameraPosition_x +=0.1;
                cameraLookAt_x += 0.1;
                camera.position.set(cameraPosition_x,cameraPosition_y,cameraPosition_z);
                camera.lookAt(new THREE.Vector3(cameraLookAt_x,cameraLookAt_y,cameraLookAt_z));
            }
            else {
                cameraState = false;
                //记录当前摄像机位置 用于下次移动摄像机计算
                signcameraPosition_x = cameraPosition_x;
                signcameraPosition_z = cameraPosition_z;
                //摄像机目标点位置
                signcameraLookAt_x = cameraLookAt_x;
                signcameraLookAt_z = cameraLookAt_z;
            }
        }
        //z轴移动
        else
        {
            if((cameraPosition_z-signcameraPosition_z)<=10*(1+currScale))
            {
                cameraPosition_z +=0.1;
                cameraLookAt_z += 0.1;
                camera.position.set(cameraPosition_x,cameraPosition_y,cameraPosition_z);
                camera.lookAt(new THREE.Vector3(cameraLookAt_x,cameraLookAt_y,cameraLookAt_z));
            }
            else
            {
                cameraState = false;
                //记录当前摄像机位置 用于下次移动摄像机计算
                signcameraPosition_x = cameraPosition_x;
                signcameraPosition_z = cameraPosition_z;
                //摄像机目标点位置
                signcameraLookAt_x = cameraLookAt_x;
                signcameraLookAt_z = cameraLookAt_z;
            }
        }
    }
}
//方块跳落失败后的动画
function jumpFail(jumpFailId)
{
    switch (jumpFailId)
    {
        //x轴跳过了
        case 0:
            break;
        //x轴跳近了
        case 1:
            break;
        //z轴跳远了
        case 2:
            break;
        //z轴跳近了
        case 3:
            break;
    }
}
