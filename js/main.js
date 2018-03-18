function toggle(funcion){
	
	var datos = document.querySelector('#datos');
    var xhttp = new XMLHttpRequest();
    if (funcion===0)
    	{
        xhttp.open("GET", "http://192.168.0.16/cm?cmnd=Power%20TOGGLE", true);
    	}
    else
    	{
        xhttp.open("GET", "http://192.168.0.16/cm?cmnd=Power", true);
    	}
    xhttp.setRequestHeader("Content-type", "application/json");

	xhttp.onreadystatechange = function () { //Call a function when the state changes.

	    if (xhttp.readyState === 4 && xhttp.status === 200) {
	        var respuesta = JSON.parse(xhttp.responseText);
			console.log(respuesta.POWER);
			if (respuesta.POWER==="ON") 
			{
				datos.style.backgroundColor = "Green";
				document.body.style.background = "Green";
				datos.innerHTML= "Encendido";

			}
			else
			{
				datos.style.backgroundColor = "Red";
				document.body.style.background = "Red";
				datos.innerHTML= "Apagado";


			}
	    }
	};
    xhttp.send();
	
}
window.onload = function () {
    // TODO:: Do your initialization job
    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName === "back") {
			try {
			    tizen.application.getCurrentApplication().exit();
			} catch (ignore) {
			}
		}
	});

    // Sample code
    var textbox = document.querySelector('.contents');
    textbox.addEventListener("click", function(){
    	toggle(0);
    });
  toggle(1);   
};
