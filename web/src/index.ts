import {LitElement, TemplateResult, html} from "lit";
import {customElement} from "lit/decorators.js";
import "./components/navbar.ts";
import "./components/welcomePage.ts";
import "./components/project.ts";

@customElement("portfolio-root")
export class Root extends LitElement {
    protected render(): TemplateResult {
        return html`
            <nav-bar></nav-bar>
            <welcome-page></welcome-page>
            <project-template></project-template>
            <footer>Copyright &copy; Lieven Schokker 2024</footer>
        `;
    }
}
