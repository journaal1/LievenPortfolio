import { LitElement, TemplateResult, html, css, CSSResult } from "lit";
import { customElement } from "lit/decorators.js";
import "../../public/img/thumbnails/vrGame.png";

@customElement("project-template")
export class Project extends LitElement {
  static styles: CSSResult = css`
h1 {
  font-size: 2rem;
  font-weight: 700;
  color: #3d3557; 
  margin: 0;
  font-family: "Comfortaa", sans-serif;
  font-style: italic;
}

h2 {
  font-size: 1.2rem;
  font-weight: 700;
  color: #6b5b95;  
  margin: 0;
}

h3 {
  font-size: 1rem;
  font-weight: 400;
  color: #c94940;  
  text-decoration: underline;
  margin: 0;
}

p {
  font-size: 1rem;
  font-weight: 400;
  color: #5a5a6b;  
  margin: 0;
}

section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.25rem;
  margin: 10rem 3rem 20rem 3rem;
  width: 70rem;
}

.card {
  display: flex;
  position: relative;
  background-color: #f8f9fa; 
  box-sizing: border-box;
  margin-left: 2em;
  border: 2px solid #f8f9fa;
  border-radius: 0.5rem;
  width: 50%;
  z-index: 1; 
}

.content {
  padding: 1.25rem;
  position: relative;
  z-index: 10;
  display: block;
  background-color: #f8f9fa;
  border-radius: 0.5rem; 
}

span {
  position: absolute;
  border-radius: 0.5rem;
  min-width: 100%;
  min-height: 100%;
  top: 6rem;
  right: 3rem;
  border: 2px solid white;
  z-index: 0;
}

.small-content {
  display: flex;
  position: absolute;
  left: 3rem;
  right: 2rem;
  bottom: 2rem;  
  justify-content: space-between;
  align-items: center;
}
img {
  object-fit: contain;
  border-radius: 0.5rem;
  width: 100%;
  height: 100%;
}

.link {
  text-decoration: none;
  color: inherit;
}

.link:hover h3 {
  text-decoration: underline;
}

.textBox {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.25rem;
  margin: 3rem;
  width: 50%;
}
    
.details{
  display: flex;
  flex-direction: row;  
  justify-content: flex-end;
  align-items: flex-end;
}  

@media screen and (max-width: 60rem) {
  section {
    flex-wrap: wrap;
    width: 100%;
  }
}
`;
  protected render(): TemplateResult {
    return html`
      <section>
        <div class="textBox">
          <h2>Unity Engine</h2>
          <h1>Virtual Synthesizer</h1>
          <p>
            This project features a synthesizer in virtual reality. The goal of
            this project is to make sound design more fun and approachable
          </p>
        </div>
        <div class="card">
          <div class="content">
            <img src="/img/thumbnails/vrGame.png" alt="vrGame" />
          </div>
          <span>
            <div class="small-content">
              <h2>
                Unity
                <p>Virtual Synthesizer</p>
              </h2>
              <a href="/project-details" class="link">
                <h3 class="details">More Details -></h3>
              </a>
            </div>
          </span>
        </div>
      </section>
    `;
  }
}
