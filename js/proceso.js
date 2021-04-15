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

	leerJSON(url).then(datos=>{
	console.log(datos);
	mostrarNoticia(datos);
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