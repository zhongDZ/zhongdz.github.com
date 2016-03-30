//var d1=document.getElementById("d1_img");
//var d2=document.getElementById("d2_img");

var clock=1;
window.setInterval(function(){
	if(clock==1){
	document.getElementById("d1_img").src="res/detail/11.png";
	document.getElementById("d2_img").src="res/detail/21.png";
	}else if(clock==2){
	document.getElementById("d1_img").src="res/detail/12.png";
	document.getElementById("d2_img").src="res/detail/22.png";
	}else{
	document.getElementById("d1_img").src="res/detail/10.png";
	document.getElementById("d2_img").src="res/detail/23.png";
	}
	if(clock<=3)
	{clock+=1;}
	else{clock=1;}
	},2000)
