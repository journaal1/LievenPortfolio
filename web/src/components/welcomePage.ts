import {LitElement, TemplateResult, html, css, CSSResult} from "lit";
import { customElement } from "lit/decorators.js";

@customElement("welcome-page")
export class WelcomePage extends LitElement{
    static styles: CSSResult = css`
        h1 {
            font-size: 3rem; 
            font-weight: 700;
            color: #1A202C;
        }

        h2 {
            font-size: 2rem; 
            font-weight: 700; 
            color: #1A202C;
        }

        h3 {
            font-size: 1rem; 
            font-weight: 400;
            color: rgb(170,46,38);
        }

        p {
            font-size: 1rem; 
            font-weight: 400; 
            color: #4A5568;
        }
    `;
    protected render(): TemplateResult {
        return html`
            <h3>Welcome to my portfolio</h3>
            <h2>My name is Lieven schokker</h2>
            <h2>Second year student at hva</h2>
        `;
    }
}
