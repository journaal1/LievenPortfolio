import {LitElement, TemplateResult, html, css, CSSResult} from "lit";
import {customElement} from "lit/decorators.js";
import "../../public/img/thumbnails/vrGame.png";

@customElement("project-template")
export class Project extends LitElement {
    static styles: CSSResult = css`
        h1 {
            font-size: 2rem;
            font-weight: 700;
            color: #1a202c;
            margin: 0;
            font-family: "Comfortaa", sans-serif;
            font-style: italic;
        }

        h2 {
            font-size: 1.2rem;
            font-weight: 700;
            color: rgb(73, 76, 79);
            margin: 0;
        }

        h3 {
            font-size: 1rem;
            font-weight: 400;
            color: rgb(170, 46, 38);
            margin: 0;
        }

        p {
            font-size: 1rem;
            font-weight: 400;
            color: #4a5568;
            margin: 0;
        }

        .filled {
            z-index: 10;
            position: relative;
            background-color: white;
            bottom: 5em;
            left: 5em;
        }

        img {
            width: 20em;
            height: 20em;
            border-radius: 5em;
            padding: 2em;
        }

        .border {
            position: absolute;
            z-index: 0;
            border-style: solid;
            border-radius: .5rem;
            border-color: rgb(255 255 255);
            border-width: 2px;
            padding: 4em;
            bottom: 5em;
        }

        container {
            display: flex;
            flex-direction: row;
        }

        card {
            display: flex;
            position: relative;
            margin-left: auto;
        }

        .link {
            text-decoration: underline;
            text-decoration-thickness: 2px;
        }

        div {
            display: flex;
            margin-left: 3em;
        }
    `;

    protected render(): TemplateResult {
        return html`
            <container>
                <article>
                    <h2>This is the title of my projec</h2>
                    <h3>I learned a lot</h3>
                    <p>wow</p>
                </article>
                <div class="card">
                    <article class="filled">
                        <img src="../../public/img/thumbnails/vrGame.png" alt="vrGame">
                    </article>
                    <article class="border">
                        <h2>This project can be found on github:</h2>
                        <h3 class="link">github</h3>
                    </article>
                </div>
            </container>
        `;
    }
}
