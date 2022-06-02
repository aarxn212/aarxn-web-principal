function mostrarConocimiento(elementID) {
    var elem = document.getElementById("cContenido");
    var elemOnClick = document.getElementById(elementID);
    var skills = ["java", "python", "diseñoWeb", "sql", "git"];

    for (let i = 0; i < skills.length; i++) {
        const id = skills[i];

        var s = document.getElementById(id);
        s.classList.remove("active");
    }

    elemOnClick.classList.add("active");

    switch (elementID) {
        case "java":
            elem.innerHTML = `<p>
                                Empecé a aprender JAVA hace 3 año cuando quise montar mi propio videojuego.
                                Gracias a ese proyecto, pude aprender eventos, POO, lectura / escritura de archivos,
                                bases de datos... Además, en este proyecto, me di cuenta de la importancia de documentar
                                el código tanto si vas a trabajar con otros desarrolladores como si lo haces solo.
                            </p>
                            <p>Aquí proyectos pequeños con los que aprendí:</p>
                            <ul>
                                <li><a href="" class="textoDestacado">Inventario de Productos</a></li>
                                <li><a href="" class="textoDestacado">Reservas</a></li>
                            </ul>`;
            break;

        case "python":
            elem.innerHTML = `<p>
                                Desde hace años me atrae la IA y ver el proceso como va evolucionando, ver el como una máquina aprende a escribir, conducir, etc... me es apasionante.
                            </p>
                                A día de hoy, las librerías <span class="textoDestacado">Numpy</span> y <span class="textoDestacado">Pandas</span> son las que más uso y estoy en proceso de aprender <span class="textoDestacado">TensorFlow</span> y <span class="textoDestacado">Keras</span> para entrar más en profundidad con la IA.
                            </p>
                            <p>Aquí algunos proyectos pequeños con los que aprendí:</p>
                            <ul>
                                <li><a href="" class="textoDestacado">Discord bot</a></li>
                                <li><a href="" class="textoDestacado">Bots</a></li>
                                <li><a href="" class="textoDestacado">Asistente virtual</a></li>
                            </ul>`;
            break;
        case "diseñoWeb":
            elem.innerHTML = `<p>
                                Hace 4 años hice mi primera página web, muy simple pero aprendí mucho. Gracias a HTML, CSS y JS he podido mejorar muchos las paginas web y ahora puedo conectar y expresar conocimientos en internet con todo el mundo.
                            </p>
                            <p>
                                Para el diseño web tuve que aprender varias tecnologías como <span class="textoDestacado">Wordpress</span>, <span class="textoDestacado">Bootstrap</span>, <span class="textoDestacado">jQuery</span> y <span class="textoDestacado">React</span> entre otras. 
                            </p>
                            <p>
                                En la actualidad, estoy desarrollando una web en la cual puedes aprender cualquier tecnología a la vez que yo lo hago. Consiste en tutoriales, ejemplos y ejercicios que yo he seguido y me han ayudado a tener el conocimiento que sé hoy en día.
                            </p>
                            <p>Aquí algunos proyectos con los que aprendí:</p>
                            <ul>
                                <li><a href="" class="textoDestacado">Portafolio web</a></li>
                                <li><a href="" class="textoDestacado">Webs para pequeñas empresas</a></li>
                                <li><a href="" class="textoDestacado">Foros</a></li>
                            </ul>`;
            break;
        case "sql":
            elem.innerHTML = `<p>
                               Una buena BBDD es lo más importante, puede llegar a ralencitarte una APP hasta un 55% más de lo normal. Por eso, me he centrado mucho en este apartado. Gracias a la optimización y a la buena estructura en las BBDDs mis proyectos han conseguido muy buen rendimiento.  
                            </p>
                            <p>
                                He podido trabajar con <span class="textoDestacado">SQL Server</span>, <span class="textoDestacado">MySQL</span>, <span class="textoDestacado">MariaoDB</span> y <span class="textoDestacado">MongoDB</span>, las cuales me han enseñado mucho sobre el guardado y tratamiento de datos.
                            </p>
                            <p>Aquí algunos proyectos pequeños con los que aprendí:</p>
                            <ul>
                                <li><a href="" class="textoDestacado">Gestión de servidores</a></li>
                                <li><a href="" class="textoDestacado">Gestión y seguimiento de pequeñas empresas</a></li>
                            </ul>`;
            break;
        case "git":
            elem.innerHTML = `<p>
                               Una de mis herramientas favoritas. Me permite subir, controlar las versiones de los proyectos y compartir código con el resto del mundo.  
                            </p>
                            <p>
                                Conocí Git gracias a un proyecto que teníamos en común varias personas y necesitabamos saber que cambios se hacían, las versiones que teniamos y una larga lista de ventajas.
                            </p>
                            <p>Mi Git personal: <a href="https://github.com/aarxn212" target="_blank" class="link textoDestacado">github.com/aarxn0</a></p>`;
            break;
        default:
            elem.innerHTML = "";
            break;
    }
}
