import { LitElement, html, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";

import "./components/navbar.ts";
import "./components/welcomePage.ts";
import "./components/project.ts";
import "./components/threejs-drawing.ts";

@customElement("portfolio-root")
export class Root extends LitElement {
    protected render(): TemplateResult {
        return html`
            <nav-bar>
            </nav-bar>

            <welcome-page
                    imageSrc="/img/thumbnails/profile.jpg"
                    imageAlt="Lieven Schokker"
            ></welcome-page>
            
            <project-template
                    subtitle="Multiplayer game engine in c++"
                    title="WIP Multiplayer game engine in c++"
                    description="A server authorative multiplayer game engine written in C++ using SDL"
                    imageSrc="/video/thumbnails/gameEngine.mp4"
                    imageAlt="Game Engine Video"
                    cardTitle="Based on SDL"
                    cardSubtitle="Cross platform"
                    detailsLink="https://github.com/journaal1"
                    reverseLayout
            >
            </project-template>

            <project-template
                    subtitle="A ThreeJS experiment"
                    title="Draw in 3D"
                    description="Challenged myself to quickly make something in ThreeJS"
                    imageAlt="Simple drawing"
                    cardTitle="Try me!"
                    cardSubtitle="Drawing in 3D"
                    detailsLink="https://github.com/journaal1"
            >
                <threejs-drawing slot="interactive"></threejs-drawing>
            </project-template>

            <project-template
                    subtitle="GiffSplash"
                    title="A couch play party game"
                    description="Giffsplash a web based game made with Springboot and Angular."
                    imageSrc="/img/thumbnails/giffSplash.png"
                    imageAlt="Drawing interaction"
                    cardTitle="Spring Boot + Angular"
                    cardSubtitle="Giffsplash source code"
                    detailsLink="https://github.com/journaal1"
                    reverseLayout
            >
            </project-template>
            <project-template
                    subtitle="DLL-Dementia"
                    title="A virtual reality experience made in unity"
                    description="A VR experience made in unity"
                    imageSrc="/video/thumbnails/dementia.mp4"
                    imageAlt="Drawing interaction"
                    cardTitle="Unity Game Engine"
                    cardSubtitle="Learn more about digital life"
                    detailsLink="https://github.com/journaal1/GIFSplash"
            >
            </project-template>
        `;
    }
}