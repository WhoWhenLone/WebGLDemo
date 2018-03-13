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
    currXORZ = Math.round(Math.random()*5);
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
    sorce++;

    if(objCount>6)
    {
        var childrenOFscene = scene.children;
        var removeOBJ = childrenOFscene[objCount-4];
        if(removeOBJ instanceof THREE.Mesh)
        {
            scene.remove(removeOBJ);
        }
    }
    console.log("场景中的物体个数"+scene.children.length);
}
//重写鼠标监听
function onMouseDown()
{
    if(mouseState&&!jumpState)
    {
        upAndDown=1;
        goSpeed=0;
        speedState =true;
        addsprite();
    }
}
function onMouseUp()
{
    if(mouseState&&!jumpState)
    {
        speedState =false;
        jumpState=true;
        jumper.scale.y=0.3;
        jumper.position.y=5.5;
        removesprite();
    }
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
                //x轴方向跳过头
                if(jumper.position.x>nextObjPosition[0]+5*currScale)
                {
                    jumpFailId=0;
                    downState = true;
                    objCount=objCount-1;
                    sorce = sorce-1;
                }
                //x轴方向跳近了
                else if(jumper.position.x<nextObjPosition[0]-5*currScale)
                {
                    jumpFailId=1;
                    downState = true;
                    objCount=objCount-1;
                    sorce = sorce-1;
                }
                //正常
                else
                {
                    if(Math.abs(jumper.position.x-nextObjPosition[0])<1)
                    {
                        sorce = sorce+1;
                        addcenter();
                        console.log("x方向物体完美落地 分数加2");
                    }
                    jumpFailId=-1;
                    //增加分数
                    document.getElementById("sorce2").innerHTML=sorce;
                    //调用方法 添加下一个方块
                    Add3DObj();
                    console.log("Add3DObj       方块跳落成功");
                    cameraState = true;
                    jumpState=false;
                }
            }
            else if(currXORZ>5)
            {
                //z轴方向跳过头
                if(jumper.position.z>nextObjPosition[2]+5*currScale)
                {
                    jumpFailId=2;
                    downState = true;
                    objCount=objCount-1;
                    sorce = sorce-1;
                }
                //z轴方向跳近了
                else if(jumper.position.z<nextObjPosition[2]-5*currScale)
                {
                    jumpFailId=3;
                    downState = true;
                    objCount=objCount-1;
                    sorce = sorce-1;
                }
                //正常
                else
                {
                    if(Math.abs(jumper.position.z-nextObjPosition[2])<1)
                    {
                        addcenter();
                        sorce = sorce+1;
                        console.log("z方向物体完美落地 分数加2");
                    }
                    jumpFailId=-1;
                    //增加分数
                    document.getElementById("sorce2").innerHTML=sorce;
                    //调用方法 添加下一个方块
                    Add3DObj();
                    console.log("Add3DObj       方块跳落成功");
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
            jumper.scale.y-=0.003;
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
        if(currXORZ<=5)
        {
            if((cameraPosition_x-signcameraPosition_x)<=9.9*(1+currScale))
            {
                cameraPosition_x +=0.1;
                cameraLookAt_x += 0.1;
                spotLight_x+=0.2;
                spotLight.position.set(spotLight_x,spotLight_y,spotLight_z);
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
        //z轴移动
        else
        {
            if((cameraPosition_z-signcameraPosition_z)<=5.5*(1+currScale))
            {
                cameraPosition_z +=0.1;
                cameraLookAt_z += 0.1;
                spotLight_z+=0.2;
                spotLight.position.set(spotLight_x,spotLight_y,spotLight_z);
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
function jumpFail()
{
    switch (jumpFailId)
    {
        //x轴跳过了
        case 0:
            //alert("游戏失败   X轴方向跳过头");
            document.getElementById("result").style.display = "block";
            document.getElementById("mask").style.display = "block";
            document.getElementById("result_sorce").innerHTML=sorce;
            mouseState =false;
            break;
        //x轴跳近了
        case 1:
            //alert("游戏失败   X轴方向跳近了");
            document.getElementById("result").style.display = "block";
            document.getElementById("mask").style.display = "block";
            document.getElementById("result_sorce").innerHTML=sorce;
            mouseState =false;
            break;
        //z轴跳远了
        case 2:
            //alert("游戏失败   Z轴方向跳过头");
            document.getElementById("result").style.display = "block";
            document.getElementById("mask").style.display = "block";
            document.getElementById("result_sorce").innerHTML=sorce;
            mouseState =false;
            break;
        //z轴跳近了
        case 3:
            //alert("游戏失败   Z轴方向跳近了");
            document.getElementById("result").style.display = "block";
            document.getElementById("mask").style.display = "block";
            document.getElementById("result_sorce").innerHTML=sorce;
            mouseState =false;
            break;
        default:
            console.log("jumpFail       方块跳落成功");
            break;
    }
}