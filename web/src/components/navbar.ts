import { LitElement, TemplateResult, html, css, CSSResult } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("nav-bar")
export class navBar extends LitElement {
  static styles: CSSResult = css`
    header {
      position: fixed;
      left: 10vw;
      top: 2vh;
      padding: 2vw;
      z-index: 40;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 7vh;
      min-height: 45px;
      border-radius: 25px;
      width: 80vw;
      background-color: rgba(255, 255, 255, 0.9);
      box-sizing: border-box;
      backdrop-filter: blur(5px)
    }

    nav {
      display: flex;
      align-items: center;
    }

    .links {
      display: flex;
      gap: 5vw;
    }

    .links a {
      text-decoration: none;
      color: #3d3557;
      font-weight: bold;
      font-size: clamp(14px, 4vw, 18px);
      transition: color 0.3s ease;
      white-space: nowrap;
    }

    .links a:hover {
      color: #c94940;
    }
  `;

  protected render(): TemplateResult {
    return html`
      <header>
        <nav>
          <div class="links">
            <a href="https://github.com/journaal1">Github</a>
            <a href="https://www.linkedin.com/in/lieven-schokker-380402238/">LinkedIn</a>
          </div>
        </nav>
      </header>
    `;
  }
}

export default navBar;