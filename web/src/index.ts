import { LitElement, html, css, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";

import "./components/cables/cable-manager.ts";
import "./components/cables/jack-points.ts";

import "./components/navbar.ts";
import "./components/welcomePage.ts";
import "./components/project.ts";

@customElement("portfolio-root")
export class Root extends LitElement {
    static styles = css`
        .jack-left {
            position: absolute;
            left: -20px;
            top: 50%;
            transform: translateY(-50%);
        }

        .jack-right {
            position: absolute;
            right: -20px;
            top: 50%;
            transform: translateY(-50%);
        }

        .header-jacks {
            position: absolute;
            top: 20px;
            left: 40px;
            display: flex;
            gap: 30px;
        }

        footer {
            position: relative;
        }

        .footer-jack {
            position: absolute;
            left: 50%;
            top: -20px;
            transform: translateX(-50%);
        }
    `;

    // Define your cable connections
    private connections = [
        { from: "header-1", to: "project-engine", color: "#EC4899" },  // Pink
        { from: "header-2", to: "project-threejs", color: "#FBBF24" }, // Yellow
        { from: "project-engine", to: "project-giff", color: "#8B5CF6" }, // Purple
        { from: "project-threejs", to: "project-synth", color: "#3B82F6" }, // Blue
        { from: "project-giff", to: "footer-1", color: "#10B981" }, // Green
    ];

    protected render(): TemplateResult {
        return html`
            <cable-manager .connections="${this.connections}">
                
                <nav-bar>
                    <!-- Jacks in the header area -->
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
                
                <footer>
                    <jack-point 
                        jack-id="footer-1" 
                        color="#10B981"
                        class="footer-jack"
                    ></jack-point>
                    Copyright &copy; Lieven Schokker 2024
                </footer>

            </cable-manager>
        `;
    }
}