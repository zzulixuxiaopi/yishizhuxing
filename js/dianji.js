var id=document.getElementById("denglu");
function showdenglu(){
	id.style.display="block";
}
function hiddendenglu(){
	id.style.display="none";
}
function check(){
	var tele= document.getElementById("tele").value;
	if(!/^1[0-9]{10}$/.test(tele)){
		alert("手机号输入错误！");
		return false;
	}
	var password=document.getElementById("password").value;
	if(/^[\s\t\n\r]*$/.test(password)){
		alert("密码不能为空");
		return false;
	}
	var password1=document.getElementById("password1").value;
	if(password!=password1){
		alert("两次输入密码不一致!");
		return false;
	}
}
