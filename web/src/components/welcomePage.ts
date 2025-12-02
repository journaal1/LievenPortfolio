import { LitElement, TemplateResult, html, css, CSSResult } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("welcome-page")
export class WelcomePage extends LitElement {
  @property({ type: String }) imageSrc = "";
  @property({ type: String }) imageAlt = "";

  static styles: CSSResult = css`
    :host {
      display: block;
    }

    .container {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      gap: 2rem;
      margin: 3rem;
      max-width: 70rem;
    }

    .text-container {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 0.25rem;
    }
    
    .image-content {
      transform: translateY(4rem);
      background-color: #f8f9fa;
      border: 2px solid #f8f9fa;
      border-radius: 50%;
      padding: 1rem;
      width: 15rem;
      height: 15rem;
    }

    .image-content img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
    
    h1 {
      font-size: 2rem;
      font-weight: 700;
      color: #1a202c;
      margin: 0;
      font-family: "Comfortaa", sans-serif;
      font-style: italic;
    }

    h3 {
      font-size: 1rem;
      font-weight: 400;
      color: rgb(170, 46, 38);
      margin: 0;
    }

    @media screen and (max-width: 60rem) {
      .container {
        flex-direction: column;
        text-align: center;
        margin: 2rem;
      }
      h1 {
        font-size: 1.8rem;
      }

      h3 {
        font-size: 0.9rem;
      }
    }
  `;

  protected render(): TemplateResult {
    return html`
      <div class="container">
        <div class="text-container">
          <h3>Portfolio by Lieven Schokker</h3>
          <h1>WELCOME TO</h1>
          <h1>MY PORTFOLIO</h1>
        </div>
          <div class="image-content">
            <img src="${this.imageSrc}" alt="${this.imageAlt}" />
          </div>
        </div>
    `;
  }
}

export default WelcomePage;