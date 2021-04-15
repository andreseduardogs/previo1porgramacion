async function leerJSON(url) {

  try {
    let response = await fetch(url);
    let user = await response.json();
    return user;
  } catch(err) {
    
    alert(err);
  }
}

function cargarNoticias()
{
	var url="https://carlosreneas.github.io/endpoints/noticias.json";
	var url1="https://carlosreneas.github.io/endpoints/categoria_deporte.json";
	var url2="https://carlosreneas.github.io/endpoints/categoria_tecnologia.json";

	leerJSON(url).then(datos=>{
	console.log(datos);
	mostrarNoticia(datos);
	})

	leerJSON(url1).then(datos1=>{
	console.log(datos1);
	mostrarDeportes(datos1);
	})

	leerJSON(url1).then(datos2=>{
	console.log(datos2);
	mostrarTecnologia(datos2);
	})
}

function mostrarNoticia(datos)
{
	var title="";
	var texto="";
	for(let i=0;i<datos.length;i++)
	{
		title="<a href='#''>"+datos[i].titulo+"-"+datos[i].categoria+"-"+datos[i].fecha+"</a>";
		texto="<p>"+datos[i].descripcion+"</p>";

		document.getElementById("noticia"+i).innerHTML=title+texto;

	}

}

function mostrarDeportes(datos)
{
	var div="";

	for(let i=0;i<datos.length;i++)
	{
		div+="<div id='deporte"+i+"'> </div>";
	}
	document.getElementById("deportes").innerHTML=div;

	var title="";
	for(let j=0;j<datos.length;j++)
	{
		title="<a href='#''>"+datos[j].titulo+"</a>";
		document.getElementById("deporte"+j).innerHTML=title;
	}
}

function mostrarTecnologia(datos)
{
	var div="";

	for(let i=0;i<datos.length;i++)
	{
		div+="<div id='tecnologia"+i+"'> </div>";
	}
	document.getElementById("tecnologias").innerHTML=div;

	var title="";
	for(let j=0;j<datos.length;j++)
	{
		title="<a href='#''>"+datos[j].titulo+"</a>";
		document.getElementById("tecnologia"+j).innerHTML=title;
	}

}