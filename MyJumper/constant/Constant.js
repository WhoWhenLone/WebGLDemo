
var scene;
var camera;
var renderer;
var spotLight;
var stats;
//摄像机参数 位置
var cameraPosition_x = -40;
var cameraPosition_y = 40;
var cameraPosition_z = -40;
//摄像机目标点位置
var cameraLookAt_x = 0;
var cameraLookAt_y = 0;
var cameraLookAt_z = 0;
//记录摄像机位置 用来计算摄像机移动距离
//摄像机参数 位置
var signcameraPosition_x = cameraPosition_x;
var signcameraPosition_z = cameraPosition_z;
//摄像机目标点位置
var signcameraLookAt_x = cameraLookAt_x;
var signcameraLookAt_z = cameraLookAt_z;
//聚光灯位置
var spotLight_x = 50+20;
var spotLight_y = 50;
var spotLight_z = 20;
//物体数量
var objCount=0;

//初始几何体
var basicCube_0;
var basicCube_1;
var basicCube_2;
var basicCube_3;
var basicCube_4;
//初始圆柱
var basicCylinder_0;
var basicCylinder_1;
var basicCylinder_2;
var basicCylinder_3;
var basicCylinder_4;
//跳动的方块对象
var jumper;
//是否跳动状态位
var jumpState =false;
//下落补间动画引用
var downTween;
//当前生成的几何体的编号
//随机生成0-9
var currObjId;
//当前生成方块的缩放系数0.4-0.8
var currScale;
//下一个方块的位置增加方向由随机数生成
var currXORZ;
//几何体距离 随机生成2-8
var currDistance;
//下一个生成的几何体位置
var nextObjPosition = new Array(0,2,0);
//上升下落标志
var upAndDown=1;
//跳动方块前进速度
var goSpeed=0;
//计时状态位
var speedState = false;
//摄像机改变标志位
var cameraState = false;
//落地成功状态位
//true 表示跳落失败
var downState = false;
//方块跳落失败动画id
var jumpFailId =-1;
//鼠标监听状态位
var mouseState = true;
var modelname = ["cube.obj","cylinder.obj","desk.obj","chair.obj","webcube.obj"];
var texname = ["mycube01.png","mycube02.png","mycube03.png","mycube04.png",
    "mycylinder01.png","mycylinder02.png","mycylinder03.png",
    "desk.png","chair.jpg","webcube.png"
];
//物体数组
var ObjArray = new Array();
//基本几何体数组
var basicObjArray = new Array();
//得分
var sorce=0;
//起跳粒子系统Group
var sprites=new THREE.Group();
//中心点粒子系统Group
var centersprites=new THREE.Group();
