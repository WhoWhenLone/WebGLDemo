//��ʼ��������
function LoadMyMesh()
{
    //�����ļ����� �����ļ������ɸļ������¡�õ�
    //���� ��ɫ
    var basicCubeGeometry_0 = new THREE.CubeGeometry(10,10,10);
    var basicCubeMaterial_0 = new THREE.MeshLambertMaterial({color:0x55bfc8});
    basicCube_0 = new THREE.Mesh(basicCubeGeometry_0,basicCubeMaterial_0);
    basicCube_0.castShadow = true;
    basicObjArray[0] = basicCube_0;
    //��ɫ
    var basicCubeGeometry_1 = new THREE.CubeGeometry(10,10,10);
    var basicCubeMaterial_1 = new THREE.MeshPhongMaterial({color:0x00ab51});
    basicCube_1 = new THREE.Mesh(basicCubeGeometry_1,basicCubeMaterial_1);
    basicCube_1.castShadow = true;
    basicObjArray[2] = basicCube_1;
    //��ɫ
    var basicCubeGeometry_2 = new THREE.CubeGeometry(10,10,10);
    var basicCubeMaterial_2 = new THREE.MeshPhongMaterial({color:0xd58007});
    basicCube_2 = new THREE.Mesh(basicCubeGeometry_2,basicCubeMaterial_2);
    basicCube_2.castShadow = true;
    basicObjArray[4] = basicCube_2;
    //��ɫ
    var basicCubeGeometry_3 = new THREE.CubeGeometry(10,10,10);
    var basicCubeMaterial_3 = new THREE.MeshPhongMaterial({color:0xe8410b});
    basicCube_3 = new THREE.Mesh(basicCubeGeometry_3,basicCubeMaterial_3);
    basicCube_3.castShadow = true;
    basicObjArray[6] = basicCube_3;
    //��ɫ
    var basicCubeGeometry_4 = new THREE.CubeGeometry(10,10,10);
    var basicCubeMaterial_4 = new THREE.MeshPhongMaterial({color:0x999999});
    basicCube_4 = new THREE.Mesh(basicCubeGeometry_4,basicCubeMaterial_4);
    basicCube_4.castShadow = true;
    basicObjArray[8] = basicCube_4;
    //Բ�� ��ɫ
    var basicCylinderGeometry_0 = new THREE.CylinderGeometry(10,10,10,25);
    var basicCylinderMaterial_0 = new THREE.MeshPhongMaterial({color:0x55bfc8});
    basicCylinder_0 = new THREE.Mesh(basicCylinderGeometry_0,basicCylinderMaterial_0);
    basicCylinder_0.castShadow = true;
    basicObjArray[1] = basicCylinder_0;
    //��ɫԲ��
    var basicCylinderGeometry_1 = new THREE.CylinderGeometry(10,10,10,25);
    var basicCylinderMaterial_1 = new THREE.MeshPhongMaterial({color:0x00ab51});
    basicCylinder_1 = new THREE.Mesh(basicCylinderGeometry_1,basicCylinderMaterial_1);
    basicCylinder_1.castShadow = true;
    basicObjArray[3] = basicCylinder_1;
    //��ɫԲ��
    var basicCylinderGeometry_2 = new THREE.CylinderGeometry(10,10,10,25);
    var basicCylinderMaterial_2 = new THREE.MeshPhongMaterial({color:0xd58007});
    basicCylinder_2 = new THREE.Mesh(basicCylinderGeometry_2,basicCylinderMaterial_2);
    basicCylinder_2.castShadow = true;
    basicObjArray[5] = basicCylinder_2;
    //��ɫԲ��
    var basicCylinderGeometry_3 = new THREE.CylinderGeometry(10,10,10,25);
    var basicCylinderMaterial_3 = new THREE.MeshPhongMaterial({color:0xe8410b});
    basicCylinder_3 = new THREE.Mesh(basicCylinderGeometry_3,basicCylinderMaterial_3);
    basicCylinder_3.castShadow = true;
    basicObjArray[7] = basicCylinder_3;
    //��ɫԲ��
    var basicCylinderGeometry_4 = new THREE.CylinderGeometry(10,10,10,25);
    var basicCylinderMaterial_4 = new THREE.MeshPhongMaterial({color:0x999999});
    basicCylinder_4 = new THREE.Mesh(basicCylinderGeometry_4,basicCylinderMaterial_4);
    basicCylinder_4.castShadow = true;
    basicObjArray[9] = basicCylinder_4;

    //��ʼ��������
    var firstCube = basicObjArray[0].clone();
    firstCube.scale.set(0.5,0.4,0.5);
    firstCube.position.set(0,2.0,0);
    scene.add(firstCube);
    //�����ķ���
    var jumpGeometry = new THREE.CubeGeometry(2,3,2);
    var jumpMaterial = new THREE.MeshPhongMaterial({color:0xff0000});
    jumper = new THREE.Mesh(jumpGeometry,jumpMaterial);
    jumper.position.set(0,5.5,0);
    scene.add(jumper);
}

//�������䷽��
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

//�����һ��������ķ���
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
        console.log("xxxxx��������һ��������");
    }
    else
    {
        nextObjPosition[2]=nextObjPosition[2] + 10*(1+currScale);
        console.log("zzzz��������һ��������");
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

    console.log("�����е��������"+scene.children.length);

     renderer.render(scene,camera);
}
function onMouseDown()
{
    console.log("�������");
    upAndDown=1;
    goSpeed=0;
    speedState =true;
}

function onMouseUp()
{
    console.log("̧�����");
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
        //��������ߵ� �ı�״̬λ
        if(jumper.position.y>=11.5 )
        {
            upAndDown=2;
        }
        //�������ڷ���
        //�������ж���ײ
        if(jumper.position.y<5.4)
        {
            upAndDown=0;
            
            if(currXORZ<5)
            {
                //����ͷ
                if(jumper.position.x>nextObjPosition[0]+5*currScale)
                {
                    alert("��Ϸʧ��   X�᷽������ͷ");
                }
                //������
                else if(jumper.position.x<nextObjPosition[0]-5*currScale)
                {
                    alert("��Ϸʧ��   X�᷽��������");
                }
                //����
                else
                {
                    //���ӷ���
                    document.getElementById("sorce2").innerHTML=objCount;
                    //���÷��� �����һ������
                    setTimeout( Add3DObj,1000);
                    cameraState = true;
                    jumpState=false;
                }
            }
            else if(currXORZ>5)
            {
                //����ͷ
                if(jumper.position.z>nextObjPosition[2]+5*currScale)
                {
                    alert("��Ϸʧ��   Z�᷽������ͷ");
                }
                //������
                else if(jumper.position.z<nextObjPosition[2]-5*currScale)
                {
                    alert("��Ϸʧ��   Z�᷽��������");
                }
                //����
                else
                {
                    //���ӷ���
                    document.getElementById("sorce2").innerHTML=objCount;
                    //���÷��� �����һ������
                    setTimeout( Add3DObj,1000);
                    cameraState = true;
                    jumpState=false;
                }
            }
        }
        //x��������
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
        //z��������
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
    //�����λ����Ҫ�ı�
    if(cameraState)
    {
        //x���ƶ�
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
                //��¼��ǰ�����λ�� �����´��ƶ����������
                signcameraPosition_x = cameraPosition_x;
                signcameraPosition_z = cameraPosition_z;
                //�����Ŀ���λ��
                signcameraLookAt_x = cameraLookAt_x;
                signcameraLookAt_z = cameraLookAt_z;
            }
        }
        //z���ƶ�
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
                //��¼��ǰ�����λ�� �����´��ƶ����������
                signcameraPosition_x = cameraPosition_x;
                signcameraPosition_z = cameraPosition_z;
                //�����Ŀ���λ��
                signcameraLookAt_x = cameraLookAt_x;
                signcameraLookAt_z = cameraLookAt_z;
            }
        }
    }
}
//��������ʧ�ܺ�Ķ���
function jumpFail(jumpFailId)
{
    switch (jumpFailId)
    {
        //x��������
        case 0:
            break;
        //x��������
        case 1:
            break;
        //z����Զ��
        case 2:
            break;
        //z��������
        case 3:
            break;
    }
}
