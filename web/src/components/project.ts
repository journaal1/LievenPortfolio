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
            gap: 4vw;
            margin: 15vh 3vw 25vh 3vw;
            max-width: 90vw;
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
            margin-left: 3vw;
            border: 2px solid #f8f9fa;
            border-radius: 1vw;
            width: 50%;
            min-width: 40vw;
            z-index: 1;
        }

        section.reverse .card {
            margin-left: 0;
            margin-right: 3vw;
        }

        .content {
            padding: 2vw;
            position: relative;
            z-index: 10;
            background-color: #f8f9fa;
            border-radius: 1vw;
            width: 100%;
            box-sizing: border-box;
        }

        slot[name="interactive"]::slotted(*) {
            display: block;
            width: 100%;
            height: 45vh;
            min-height: 250px;
            border-radius: 1vw;
        }

        span {
            position: absolute;
            border-radius: 1vw;
            width: calc(100% - 2vw);
            height: calc(100% + 5vh);
            top: 6vh;
            right: -3vw;
            border: 2px solid white;
            z-index: -1;
            box-sizing: border-box;
        }

        section.reverse span {
            right: auto;
            left: -3vw;
        }

        .small-content {
            display: flex;
            position: absolute;
            left: 2vw;
            right: 2vw;
            bottom: 2vh;
            min-height: 8vh;
            justify-content: space-between;
            align-items: flex-end;
            padding-top: 2vh;
            gap: 2vw;
        }

        img, video {
            object-fit: fill;
            border-radius: 1vw;
            width: 100%;
            height: 35vh;
            min-height: 200px;
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
            gap: 1vh;
            margin: 4vw;
            width: 50%;
            min-width: 35vw;
        }

        .details {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: flex-end;
        }

        @media screen and (max-width: 700px) {
            section,
            section.reverse {
                flex-direction: column;
                align-items: center;
            }

            .card {
                margin-left: 0 !important;
                margin-right: 0 !important;
                width: 90vw;
                min-width: unset;
            }

            .textBox {
                width: 90vw;
                min-width: unset;
                margin: 4vw 2vw;
            }

            span {
                right: -2vw !important;
                left: auto !important;
            }

            section.reverse span {
                right: -2vw !important;
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
                        <slot name="interactive">
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
                        </slot>
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