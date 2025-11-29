import { LitElement, html, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";

import "./components/cables/cable-manager.ts";
import "./components/cables/jack-points.ts";

import "./components/navbar.ts";
import "./components/welcomePage.ts";
import "./components/project.ts";

@customElement("portfolio-root")
export class Root extends LitElement {
    private connections = [
        { from: "header-1", to: "project-engine", color: "#EC4899" },
        { from: "header-2", to: "project-threejs", color: "#FBBF24" },
        { from: "project-engine", to: "project-giff", color: "#8B5CF6" },
        { from: "project-threejs", to: "project-synth", color: "#3B82F6" },
        { from: "project-giff", to: "footer-1", color: "#10B981" }, 
    ];

    protected render(): TemplateResult {
        return html`
            <cable-manager .connections="${this.connections}">
                
                <nav-bar>
                    <div class="header-jacks">
                        <jack-point jack-id="header-1" color="#EC4899"></jack-point>
                        <jack-point jack-id="header-2" color="#FBBF24"></jack-point>
                    </div>
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
                    <jack-point 
                        slot="jack" 
                        jack-id="project-engine" 
                        color="#EC4899"
                        class="jack-left"
                    ></jack-point>
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
                    <jack-point 
                        slot="jack" 
                        jack-id="project-threejs" 
                        color="#FBBF24"
                        class="jack-right"
                    ></jack-point>
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
                    <jack-point 
                        slot="jack" 
                        jack-id="project-giff" 
                        color="#8B5CF6"
                        class="jack-left"
                    ></jack-point>
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
                    <jack-point 
                        slot="jack" 
                        jack-id="project-synth" 
                        color="#3B82F6"
                        class="jack-right"
                    ></jack-point>
                </project-template>
            </cable-manager>
        `;
    }
}