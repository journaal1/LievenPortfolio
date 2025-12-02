import { LitElement, html, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";

import "./components/navbar.ts";
import "./components/welcomePage.ts";
import "./components/project.ts";

@customElement("portfolio-root")
export class Root extends LitElement {
    protected render(): TemplateResult {
        return html`
            <nav-bar>
            </nav-bar>

            <welcome-page></welcome-page>

            <!-- Add jacks to each project -->
            <project-template
                    subtitle="Multiplayer game engine in c++"
                    title="Multiplayer game engine in c++"
                    description="A modern e-commerce platform built with React and TypeScript"
                    imageSrc="/img/thumbnails/ecommerce.png"
                    imageAlt="E-Commerce Platform"
                    cardTitle="Based on SDL"
                    cardSubtitle="Cross platform available"
                    detailsLink="/project-details/ecommerce"
                    reverseLayout
            >
            </project-template>

            <project-template
                    subtitle="A ThreeJS experiment"
                    title="Draw in 3D"
                    description="A Quick and simple demo"
                    imageSrc="/img/thumbnails/ai.png"
                    imageAlt="Simple drawing"
                    cardTitle="Try me!"
                    cardSubtitle="Giffsplash source code"
                    detailsLink="https://github.com/journaal1/GIFSplash"
            >
            </project-template>

            <project-template
                    subtitle="GiffSplash"
                    title="A couch play party game"
                    description="Giffsplash a web based game made with Springboot and Angular."
                    imageSrc="/img/thumbnails/ai.png"
                    imageAlt="Drawing interaction"
                    cardTitle="Spring Boot + Angular"
                    cardSubtitle="Giffsplash source code"
                    detailsLink="https://github.com/journaal1/GIFSplash"
            >
            </project-template>

            <project-template
                    subtitle="Unity Engine"
                    title="Virtual Synthesizer"
                    description="This project features a synthesizer in virtual reality."
                    imageSrc="/img/thumbnails/vrGame.png"
                    imageAlt="VR Game"
                    cardTitle="Unity"
                    cardSubtitle="Virtual Synthesizer"
                    detailsLink="/project-details/vr-synth"
            >
            </project-template>
            </cable-manager>
        `;
    }
}