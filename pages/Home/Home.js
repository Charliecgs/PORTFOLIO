import "./Home.css";

import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
    const main = document.querySelector("main");
    cleanPage(main);
    main.innerHTML = `
    <section class="home">
        <p>Hola, soy</p>
        <h1>CHARLIE FLOW</h1>
        <p>Soy ingeniero de software con sede en MiCasa, TuCasa y también estudiante de la vida. Disfruto creando cosas que viven en Internet, ya sean sitios web, aplicaciones o cualquier otra cosa. He trabajado como autónomo durante un año mientras estudiaba en la universidad y he logrado obtener una cantidad decente de experiencia y conocimientos valiosos de diferentes tipos de campos a lo largo de mis proyectos/trabajos.</p>
        <a href="mailto:cgsmanu@gmail.com">Escribeme →</a>
    </section>
    `;
}