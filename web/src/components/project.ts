import {LitElement, TemplateResult, html, css, CSSResult} from "lit";
import {customElement, property} from "lit/decorators.js";

@customElement("project-template")
export class Project extends LitElement {
    @property({type: String}) subtitle = "";
    @property({type: String}) title = "";
    @property({type: String}) description = "";
    @property({type: String}) imageSrc = "";
    @property({type: String}) imageAlt = "";
    @property({type: String}) cardTitle = "";
    @property({type: String}) cardSubtitle = "";
    @property({type: String}) detailsLink = "#";
    @property({type: Boolean}) reverseLayout = false;

    private get isVideo(): boolean {
        const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov'];
        return videoExtensions.some(ext => this.imageSrc.toLowerCase().endsWith(ext));
    }

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
            gap: 2rem;
            margin: 10rem 3rem 20rem 3rem;
            max-width: 70rem;
            width: 100%;
        }

        section.reverse {
            flex-direction: row-reverse;
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
            min-width: 300px;
            z-index: 1;
        }

        section.reverse .card {
            margin-left: 0;
            margin-right: 2em;
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
            width: 100%;
            height: 100%;
            top: 6rem;
            right: 3rem;
            border: 2px solid white;
            z-index: 0;
        }

        section.reverse span {
            right: auto;
            left: 3rem;
        }

        .small-content {
            display: flex;
            position: absolute;
            left: 3rem;
            right: 2rem;
            bottom: 2rem;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
        }

        img, video {
            object-fit: contain;
            border-radius: 0.5rem;
            width: 100%;
            height: 100%;
        }

        .link {
            text-decoration: none;
            color: inherit;
        }

        .textBox {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 0.25rem;
            margin: 3rem;
            width: 50%;
            min-width: 250px;
        }

        .details {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: flex-end;
        }

        @media screen and (max-width: 80rem) {
            section {
                margin: 8rem 2rem 15rem 2rem;
            }

            h1 {
                font-size: 1.75rem;
            }
        }

        @media screen and (max-width: 60rem) {
            section {
                margin: 5rem 1.5rem 10rem 1.5rem;
                gap: 1.5rem;
            }

            h1 {
                font-size: 1.5rem;
            }

            h2 {
                font-size: 1rem;
            }

            span {
                right: 1.5rem;
                top: 5rem;
            }

            section.reverse span {
                right: auto;
                left: 1.5rem;
            }

            .small-content {
                font-size: 0.9rem;
            }
        }

        @media screen and (max-width: 45rem) {
            section,
            section.reverse {
                flex-direction: column;
                align-items: center;
            }

            .card {
                margin-left: 0 !important;
                margin-right: 0 !important;
            }

            span {
                right: 1.5rem !important;
                left: auto !important;
            }
        }
    `;

    protected render(): TemplateResult {
        return html`
            <section class="${this.reverseLayout ? 'reverse' : ''}">
                <div class="textBox">
                    <h2>${this.subtitle}</h2>
                    <h1>${this.title}</h1>
                    <p>${this.description}</p>
                </div>
                <div class="card">
                    <div class="content">
                        ${this.isVideo
                                ? html`
                                    <video
                                            src="${this.imageSrc}"
                                            autoplay
                                            loop
                                            muted
                                            playsinline
                                            aria-label="${this.imageAlt}"
                                    ></video>`
                                : html`<img src="${this.imageSrc}" alt="${this.imageAlt}"/>`
                        }
                    </div>
                    <span>
            <div class="small-content">
              <h2>
                ${this.cardTitle}
                <p>${this.cardSubtitle}</p>
              </h2>
              <a href="${this.detailsLink}" class="link">
                <h3 class="details">More Details -></h3>
              </a>
            </div>
          </span>
                </div>
            </section>
        `;
    }
}