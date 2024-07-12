let menuToggle = false;
//Muestra u oculta el menu

const menu = () => {
    if(menuToggle ) {

        document.getElementById("nav").classList=""
        menuToggle=false
    } else {
        document.getElementById("nav").classList= "responsive"
        menuToggle=true;
    }
}

const selection = () => {
    document.getElementById("nav").classList= "";
    menuToggle=false;
}
const efectoHabilidades = () => {
    let skills = document.getElementById('skills')
    let distance_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distance_skills >= 300) {
        let habilidades = document.getElementsByClassName('progress')
        habilidades[0].classList.add("javascript")
        habilidades[1].classList.add("htmlcss")
        habilidades[2].classList.add("react")
        habilidades[3].classList.add("node")
        habilidades[4].classList.add("comunication")
        habilidades[5].classList.add("work")
        habilidades[6].classList.add("creativity")
        habilidades[7].classList.add("dedication")
    }
}

window.onscroll = function(){
    efectoHabilidades()
} 

document.getElementById('descargarCV').addEventListener('click', function() {
    // Crear un objeto Blob con el contenido del PDF
    const pdfData = `https://www.linkedin.com/posts/mariano-velarde-fullstack_cv-mariano-velarde-activity-7170130445102112768-w3CL?utm_source=share&utm_medium=member_desktop`;
    const blob = new Blob([pdfData], { type: 'application/pdf' });

    // Crear una URL para el objeto Blob
    const url = URL.createObjectURL(blob);

    // Crear un enlace <a> temporal para descargar el archivo
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Cv_mariano_velarde'; // Nombre del archivo PDF
    document.body.appendChild(a);

    // Simular un clic en el enlace para iniciar la descarga
    a.click();

    // Eliminar el enlace temporal y liberar la URL del objeto Blob
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});
