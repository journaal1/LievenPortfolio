import {LitElement, TemplateResult, html, css, CSSResult} from "lit";
import {customElement} from "lit/decorators.js";

@customElement("nav-bar")
export class navBar extends LitElement {
    static styles: CSSResult = css`

        header {
            position: fixed;
            left: 1rem;
            right: 1rem;
            top: 0.5rem;
            z-index: 40;
            margin-left: 15rem;
            margin-right: 15rem;
            display: flex;
            justify-content: flex-end;
            height: 3.5rem;
            border-radius: 1rem;
            background-color: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(5px);
            transition: background-color 0.3s ease;
        }

        nav {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin-right: 5rem;
        }

        .links :hover {
            color: red;
            gap: 20px;

        }

        .links a {
            text-decoration: none;
            color: black; /* Link color */
            font-weight: bold;
        }

        a {
            margin: 0.5em;
        }
    `;

    protected render(): TemplateResult {
        return html`
            <header>
                <nav>
                    <div class="links">
                        <a href="https://soundcloud.com/lieven-schokker">Music</a>
                        <a href="/Monthly">Monthly</a>
                    </div>
                </nav>
            </header>
        `;
    }
}

export default navBar;
