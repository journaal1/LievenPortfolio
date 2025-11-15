import { LitElement, TemplateResult, html } from "lit";
import { customElement } from "lit/decorators.js";
import "./components/navbar.ts";
import "./components/welcomePage.ts";
import "./components/project.ts";

@customElement("portfolio-root")
export class Root extends LitElement {
    protected render(): TemplateResult {
        return html`
            <nav-bar></nav-bar>
            <welcome-page></welcome-page>
            
            <!-- First Project - Image on Right -->
            <project-template
                subtitle="Unity Engine"
                title="Virtual Synthesizer"
                description="This project features a synthesizer in virtual reality. The goal of this project is to make sound design more fun and approachable"
                imageSrc="/img/thumbnails/vrGame.png"
                imageAlt="VR Game"
                cardTitle="Unity"
                cardSubtitle="Virtual Synthesizer"
                detailsLink="/project-details/vr-synth"
            ></project-template>
            
            <!-- Second Project - Image on Left (reversed) -->
            <project-template
                subtitle="React & TypeScript"
                title="E-Commerce Platform"
                description="A modern e-commerce platform built with React and TypeScript, featuring real-time inventory management"
                imageSrc="/img/thumbnails/ecommerce.png"
                imageAlt="E-Commerce Platform"
                cardTitle="React"
                cardSubtitle="E-Commerce Platform"
                detailsLink="/project-details/ecommerce"
                reverseLayout
            ></project-template>
            
            <!-- Third Project - Image on Right -->
            <project-template
                subtitle="Machine Learning"
                title="AI Image Recognition"
                description="Deep learning model for image classification with 95% accuracy on standard datasets"
                imageSrc="/img/thumbnails/ai.png"
                imageAlt="AI Project"
                cardTitle="Python"
                cardSubtitle="AI Image Recognition"
                detailsLink="/project-details/ai-image"
            ></project-template>
            
            <footer>Copyright &copy; Lieven Schokker 2024</footer>
        `;
    }
}