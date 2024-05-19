import {LitElement, TemplateResult, html, css, CSSResult} from "lit";
import { customElement } from "lit/decorators.js";
import "../../public/img/thumbnails/vrGame.png";
@customElement("project-template")
export class Project extends LitElement{
    static styles : CSSResult = css`
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
        .filled{
            z-index: 2;
            background-color: white;
        }
        img{
            width: 20em;
            height: 20em;
            border-radius: 5em;
            padding: 2em;
        }
        .border{
            z-index: 1;
            border-style: solid;
            border-radius: .5rem;
            border-color: rgb(255 255 255);
            border-width: 2px;
            width: 50%;
            padding: 4em;
        }
        container{
            display: flex;
            flex-direction: row;
        }
    `;
    protected render(): TemplateResult {
        return html`
            <container>
                <article class="filled">
                    <img src="../../public/img/thumbnails/vrGame.png" alt="vrGame">
                </article>
                <article class="border">
                    <h3>this is a project!</h3>
                </article>
            </container>
        `;
    }
}
