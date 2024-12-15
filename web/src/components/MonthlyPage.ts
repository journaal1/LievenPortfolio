import { LitElement, TemplateResult, html, css, CSSResult } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("welcome-page")
export class MonthlyPage extends LitElement {
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

    .text-container {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 0.25rem;
      margin: 3rem;
      width: 55rem;
    }

    @media screen and (max-width: 60rem) {
      .text-container {
        margin: 2rem;
        width: 40rem;
      }

      h1 {
        font-size: 1.8rem;
      }

      h2 {
        font-size: 1rem;
      }

      h3 {
        font-size: 0.9rem;
      }

      p {
        font-size: 0.9rem;
      }
    }
    @media screen and (max-width: 25rem) {
      .text-container {
        margin: 1rem;
        width: 100%;
        align-items: center;
        text-align: center;
      }

      h1 {
        font-size: 1.2rem;
      }

      h2 {
        font-size: 0.8rem;
      }

      h3 {
        font-size: 0.7rem;
      }

      p {
        font-size: 0.7rem;
      }
    }
  `;

  protected render(): TemplateResult {
    return html`
      <div class="text-container">
        <h3>This is my Monthly Blog</h3>
        <h1>AUGUST IS ABOUT:</h1>
        <h1>Rendering A Cube In CSS</h1>
      </div>
    `;
  }
}

export default MonthlyPage;
