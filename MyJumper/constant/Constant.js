
var scene;
var camera;
var renderer;
var spotLight;
//��������� λ��
var cameraPosition_x = -40;
var cameraPosition_y = 40;
var cameraPosition_z = -40;
//�����Ŀ���λ��
var cameraLookAt_x = 0;
var cameraLookAt_y = 0;
var cameraLookAt_z = 0;
//��¼�����λ�� ��������������ƶ�����
//��������� λ��
var signcameraPosition_x = cameraPosition_x;
var signcameraPosition_z = cameraPosition_z;
//�����Ŀ���λ��
var signcameraLookAt_x = cameraLookAt_x;
var signcameraLookAt_z = cameraLookAt_z
//�۹��λ��
var spotLight_x = 20;
var spotLight_y = 30;
var spotLight_z = -5;
//��������
var objCount=0;
//��������
var ObjArray = new Array();
//��������������
var basicObjArray = new Array();
//��ʼ������
var basicCube_0;
var basicCube_1;
var basicCube_2;
var basicCube_3;
var basicCube_4;
//��ʼԲ��
var basicCylinder_0;
var basicCylinder_1;
var basicCylinder_2;
var basicCylinder_3;
var basicCylinder_4;
//�����ķ������
var jumper;
//�Ƿ�����״̬λ
var jumpState =false;
//���䲹�䶯������
var downTween;
//��ǰ���ɵļ�����ı��
//�������0-9
var currObjId;
//��ǰ���ɷ��������ϵ��0.4-0.8
var currScale;
//��һ�������λ�����ӷ��������������
var currXORZ;
//��������� �������2-8
var currDistance;
//��һ�����ɵļ�����λ��
var nextObjPosition = new Array(0,2,0);
//���������־
var upAndDown=1;
//��������ǰ���ٶ�
var goSpeed=0;
//��ʱ״̬λ
var speedState = false;
//������ı��־λ
var cameraState = false;
//��سɹ�״̬λ
var downState = false;
//��������ʧ�ܶ���id
var jumpFailId =-1;

