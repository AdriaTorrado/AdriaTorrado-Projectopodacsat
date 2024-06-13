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
        contenidohtml += '<li>${autor}${introduccion}${descripcion}${tieompo_lectura}${num_visualizaciones}${num_comentarios}${num_megusta}${imagen}</li>';
    }
    contenidohtml += '<ul>';
    document.getElementById('contenido').innerHTML = contenidohtml;
})