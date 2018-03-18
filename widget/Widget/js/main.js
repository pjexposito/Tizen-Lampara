function toggle(){
	console.log("AA");
	var datos = document.querySelector('#datos');
    var xhttp = new XMLHttpRequest();

        xhttp.open("GET", "http://192.168.0.16/cm?cmnd=Power%20TOGGLE", true);
    	
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

window.onclick = function() 
   {
	  toggle();   
   };

   
    
