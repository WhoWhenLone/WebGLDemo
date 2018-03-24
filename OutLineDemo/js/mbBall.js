function mbBall(								//�����������������������
    gl,						 					//GL������
    programIn,	//��ɫ������id
    BallR
){
    this.vertexData=new Array();
    var r=BallR;
    this.initVertexData=function(){
        var angleSpan=15;//������е�λ�зֵĽǶ�
        for(var vAngle = -90; vAngle < 90; vAngle = vAngle + angleSpan)
        {
            for (var hAngle = 0; hAngle <= 360; hAngle = hAngle + angleSpan)// ˮƽ����angleSpan��һ��
            {// ����������һ���ǶȺ�����Ӧ�Ĵ˵��������ϵ�����
                var x0 = r * Math.cos(vAngle*Math.PI/180) * Math.cos(hAngle*Math.PI/180);
                var y0 = r * Math.cos(vAngle*Math.PI/180) * Math.sin(hAngle*Math.PI/180);
                var z0 = r * Math.sin(vAngle*Math.PI/180);

                var x1 = r * Math.cos(vAngle*Math.PI/180) * Math.cos((hAngle+angleSpan)*Math.PI/180);
                var y1 = r * Math.cos(vAngle*Math.PI/180) * Math.sin((hAngle+angleSpan)*Math.PI/180);
                var z1 = r * Math.sin(vAngle*Math.PI/180);

                var x2 = r * Math.cos((vAngle+angleSpan)*Math.PI/180) * Math.cos((hAngle+angleSpan)*Math.PI/180);
                var y2 = r * Math.cos((vAngle+angleSpan)*Math.PI/180) * Math.sin((hAngle+angleSpan)*Math.PI/180);
                var z2 = r * Math.sin((vAngle + angleSpan)*Math.PI/180);

                var x3 = r * Math.cos((vAngle+angleSpan)*Math.PI/180) * Math.cos(hAngle*Math.PI/180);
                var y3 = r * Math.cos((vAngle+angleSpan)*Math.PI/180) * Math.sin(hAngle*Math.PI/180);
                var z3 = r * Math.sin((vAngle + angleSpan)*Math.PI/180);

                this.vertexData.push(x1,y1,z1);
                this.vertexData.push(x3,y3,z3);
                this.vertexData.push(x0,y0,z0);

                this.vertexData.push(x1,y1,z1);
                this.vertexData.push(x2,y2,z2);
                this.vertexData.push(x3,y3,z3);
            }
        }
    };
    this.initVertexData();
    this.vcount=this.vertexData.length/3;					//�õ���������
    this.vertexBuffer=gl.createBuffer();				//���������������ݻ���
    gl.bindBuffer(gl.ARRAY_BUFFER,this.vertexBuffer); 	//�󶨶����������ݻ���
    //�����������������뻺��
    gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this.vertexData),gl.STATIC_DRAW);

    this.normalData=this.vertexData;
    this.normalBuffer=gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER,this.normalBuffer);
    //�������������������뻺��
    gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this.normalData),gl.STATIC_DRAW);

    this.program=programIn;		//��ʼ����ɫ������id
    this.drawSelf=function(ms)//��������ķ���
    {
        gl.useProgram(this.program);//ָ��ʹ��ĳ����ɫ������
        //��ȡ�ܱ任��������id
        var uMVPMatrixHandle=gl.getUniformLocation(this.program, "uMVPMatrix");
        //���ܱ任����������Ⱦ����
        gl.uniformMatrix4fv(uMVPMatrixHandle,false,new Float32Array(ms.getFinalMatrix()));

        gl.enableVertexAttribArray(gl.getAttribLocation(this.program, "aPosition"));//���ö���������������
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);	//�󶨶����������ݻ���
        //������ָ��������������
        gl.vertexAttribPointer(gl.getAttribLocation(this.program,"aPosition"),3,gl.FLOAT,false,0, 0);

        gl.enableVertexAttribArray(gl.getAttribLocation(this.program, "aNormal"));//���÷�������������
        gl.bindBuffer(gl.ARRAY_BUFFER, this.normalBuffer);	//�󶨷��������ݻ���
        //������ָ����������������
        gl.vertexAttribPointer(gl.getAttribLocation(this.program,"aNormal"),3,gl.FLOAT,false,0, 0);

        gl.drawArrays(gl.TRIANGLES, 0, this.vcount);		//�ö��㷨��������

    }
}
