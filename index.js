console.log('hola');

fetch('podcast.xml')
.then(Response => Response.text())
.then(data => {
    const parser = new DOMParser()
    const xml = parser.parseFromString(data, "application/xml")
    console.log("Lo que tiene la variable xml" ,xml)
    
    const posts = xml.querySelectorAll("post")
    console.log("Lo que tiene la variable posts" ,posts)
    console.log("Primer post",posts[0])
    console.log(posts[0].getAttribute("titulo"));
    console.log(posts[0].getAttribute("fecha"));
    console.log(posts[0].querySelector("nombre").textContent);
    console.log(posts[0].querySelector("introduccion").textContent)
    
    let contenidohtml = '<ul>';

    for(i=0;i<posts.length;i++){
        let autor = posts[i].querySelector("autor").textContent;
        let introduccion = posts[i].querySelector("introduccion").textContent;
        let descripcion = posts[i].querySelector("descripcion").textContent;
        let tiempo_lectura = posts[i].querySelector("tiempo_lectura").textContent;
        let num_visualizaciones = posts[i].querySelector("num_visualizaciones").textContent;
        let num_comentarios = posts[i].querySelector("num_comentarios").textContent;
        let num_megusta = posts[i].querySelector("num_megusta").textContent;
        let imagen = posts[i].querySelector("imagen").textContent;
        console.log('autor: ',autor, 'introduccion: ', introduccion, 'descripcion: ', descripcion, 'tiempo_lectura: ', tiempo_lectura, 'mum_visualizaciones: ', num_visualizaciones, 'num_comentarios: ', num_comentarios, 'num_megusta: ', num_megusta, 'imagen: ',imagen)
        contenidohtml += '<li><p>Autor: ${autor}</p><p>Introduccion: ${introduccion}</p><p>Descripcion: ${descripcion}</p><p>Tiempo: ${tiempo_lectura}</p><p>Num_visitas: ${num_visualizaciones}</p><p>Num_comentarios: ${num_comentarios}</p><p>Num_megusta: ${num_megusta}</p><p>Imagen: ${imagen}</p></li>';
    }
    contenidohtml += '<ul>';
    document.getElementById('contenido').innerHTML = contenidohtml;
})