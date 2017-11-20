window.addEventListener("deviceorientation",on_device_orintation);
window.addEventListener("devicemotion",on_device_motion);

function on_device_orintation(e)
{
	document.getElementById("id_z").innerHTML="z=" +e.alpha;
	document.getElementById("id_x").innerHTML="z=" +e.beta;
	document.getElementById("id_y").innerHTML="z=" +e.gamma;
}

function on_device_motion(e)
{
		
	
	
}