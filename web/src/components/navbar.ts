import { LitElement, TemplateResult, html, css, CSSResult } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("nav-bar")
export class navBar extends LitElement {
  static styles: CSSResult = css`
    header {
      position: fixed;
      left: 1rem;
      right: 1rem;
      top: 0.5rem;
      z-index: 40;
      margin-left: auto;
      margin-right: auto;
      max-width: 1200px; /* Limits the width on larger screens */
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 3.5rem;
      border-radius: 1rem;
      background-color: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(5px);
      transition: background-color 0.3s ease;
      padding: 0.5rem 1rem; /* Added padding for spacing */
    }

    nav {
      display: flex;
      align-items: center;
      margin-right: 1rem;
    }

    .links {
      display: flex;
      gap: 1rem;
    }

    .links a {
      text-decoration: none;
      color: black; /* Link color */
      font-weight: bold;
      transition: color 0.3s ease;
    }

    .links a:hover {
      color: red;
    }

    a {
      margin: 0.5em;
    }

    /* Responsive Styles */
    @media (max-width: 768px) {
      header {
        flex-direction: column;
        align-items: flex-start;
        height: auto;
        padding: 1rem;
      }

      nav {
        width: 100%;
        justify-content: flex-end; /* Keep links on the right */
        margin-right: 0;
      }

      .links {
        flex-direction: column;
        align-items: flex-end; /* Align links to the right in mobile view */
        gap: 0.5rem;
      }

      .links a {
        font-size: 1rem; /* Adjust font size for smaller screens */
      }
    }

    @media (max-width: 480px) {
      header {
        padding: 0.5rem 1rem; /* Additional padding for smaller screens */
      }

      .links a {
        font-size: 0.9rem;
      }
    }
  `;

  protected render(): TemplateResult {
    return html`
      <header>
        <nav>
          <div class="links">
            <a href="https://soundcloud.com/lieven-schokker">Music</a>
          </div>
        </nav>
      </header>
    `;
  }
}

export default navBar;
