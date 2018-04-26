function Triangle(								//�����������������������
	gl,						 					//GL������
	programIn									//��ɫ������id
){
	//this.vertexData=vertexDataIn;						//��ʼ��������������
	this.vertexData=
		[
            -3,2,0,
            3,-2,0,
            3,2,0,

            -3,2,0,
            -3,-2,0,
            3,-2,0

		];
	this.vcount=this.vertexData.length/3;					//�õ���������
	this.vertexBuffer=gl.createBuffer();				//���������������ݻ���
	gl.bindBuffer(gl.ARRAY_BUFFER,this.vertexBuffer); 	//�󶨶����������ݻ���
	//�����������������뻺��
	gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this.vertexData),gl.STATIC_DRAW);
	
	this.colorsData=
		[
			0,0,1,1,1,0,
			0,0,0,1,1,1
		];
	this.colorBuffer=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,this.colorBuffer); 	//����ɫ���ݻ���
	//����ɫ�������뻺��
	gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this.colorsData),gl.STATIC_DRAW);

	
	this.program=programIn;		//��ʼ����ɫ������id
	
	this.drawSelf=function(ms,texture,currentStartAngle)//��������ķ���
	{	
		gl.useProgram(this.program);//ָ��ʹ��ĳ����ɫ������
		//ִ��ƽ��
		ms.translate(0,0,0);
	    //ִ����Y����ת
		ms.rotate(currentYAngle,0,1,0);
		//ִ����X����ת
		ms.rotate(currentXAngle,1,0,0);
		//��ȡ�ܱ任��������id
		var uMVPMatrixHandle=gl.getUniformLocation(this.program, "uMVPMatrix");
		//���ܱ任����������Ⱦ����
		gl.uniformMatrix4fv(uMVPMatrixHandle,false,new Float32Array(ms.getFinalMatrix()));
		
		gl.enableVertexAttribArray(gl.getAttribLocation(this.program, "aPosition"));//���ö���������������
		gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);	//�󶨶����������ݻ���
		//������ָ��������������
		gl.vertexAttribPointer(gl.getAttribLocation(this.program,"aPosition"),3,gl.FLOAT,false,0, 0);
		
			//���ö�������������������
		gl.enableVertexAttribArray(gl.getAttribLocation(this.program, "aTexCoor")); 
		//�󶨶��������������ݻ���
		gl.bindBuffer(gl.ARRAY_BUFFER, this.colorBuffer);
		//������ָ������������������
		gl.vertexAttribPointer(gl.getAttribLocation(this.program, "aTexCoor"), 2, gl.FLOAT, false, 0, 0); 

		//console.log("angle			"+currentStartAngle);
		//����ǰ��ʼ�Ƕȴ�����ɫ��
		gl.uniform1f(gl.getUniformLocation(this.program,"startAngle"),currentStartAngle);
		
		gl.activeTexture(gl.TEXTURE0);//����ʹ�õ�������-0
		gl.bindTexture(gl.TEXTURE_2D, texture);//������
		//��������
		gl.uniform1i(gl.getUniformLocation(this.program, "sTexture"), 0);//������������Ⱦ����  	
		gl.drawArrays(gl.TRIANGLES, 0, this.vcount);		//�ö��㷨��������
	}
}
