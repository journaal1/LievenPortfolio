import {LitElement, TemplateResult, html, css, CSSResult} from "lit";
import {customElement, property, state} from "lit/decorators.js";

@customElement("project-template")
export class Project extends LitElement {
    @property({type: String}) subtitle = "";
    @property({type: String}) title = "";
    @property({type: String}) description = "";
    @property({type: String}) detailedDescription = "";
    @property({type: String}) imageSrc = "";
    @property({type: String}) youtubeId = "";
    @property({type: String}) imageAlt = "";
    @property({type: String}) cardTitle = "";
    @property({type: String}) cardSubtitle = "";
    @property({type: String}) githubLink = "#";
    @property({type: Boolean}) reverseLayout = false;

    @state() private isExpanded = false;

    private get isVideo(): boolean {
        const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov'];
        return videoExtensions.some(ext => this.imageSrc.toLowerCase().endsWith(ext));
    }

    private expand(): void {
        this.isExpanded = true;
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
            cursor: pointer;
            transition: color 0.2s ease;
        }

        h3:hover {
            color: #a33830;
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
            flex-direction: column;
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
            transition: height 0.4s ease;
        }

        span.expanded {
            height: calc(100% + 60vh);
        }

        .spacer {
            height: 0;
            transition: height 0.4s ease;
        }

        .spacer.expanded {
            height: 30vh;
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

        .detailed-description {
            position: absolute;
            left: 2vw;
            right: 2vw;
            bottom: 12vh;
            opacity: 0;
            transform: translateY(10px);
            transition: opacity 0.4s ease, transform 0.4s ease;
            pointer-events: none;
        }

        .detailed-description.visible {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
        }

        .detailed-description p {
            line-height: 1.6;
            margin-bottom: 1rem;
        }

        .github-link {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            color: #3d3557;
            text-decoration: none;
            font-weight: 600;
            padding: 0.5rem 1rem;
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 0.5rem;
            transition: background-color 0.2s ease;
        }

        .github-link:hover {
            background-color: rgba(255, 255, 255, 1);
        }

        img, video {
            object-fit: fill;
            border-radius: 1vw;
            width: 100%;
            height: 35vh;
            min-height: 200px;
        }

        iframe {
            border-radius: 1vw;
            width: 100%;
            height: 35vh;
            min-height: 200px;
            border: none;
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

    private renderMedia(): TemplateResult {
        if (this.youtubeId) {
            return html`
                <iframe
                    src="https://www.youtube-nocookie.com/embed/${this.youtubeId}"
                    title="${this.imageAlt}"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>`;
        }

        if (this.isVideo) {
            return html`
                <video
                    src="${this.imageSrc}"
                    autoplay
                    loop
                    muted
                    playsinline
                    aria-label="${this.imageAlt}"
                ></video>`;
        }

        return html`<img src="${this.imageSrc}" alt="${this.imageAlt}"/>`;
    }

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
                        ${this.renderMedia()}
                    </slot>
                </div>
                <span class="${this.isExpanded ? 'expanded' : ''}">
                    <div class="detailed-description ${this.isExpanded ? 'visible' : ''}">
                        <p>${this.detailedDescription}</p>
                        ${this.githubLink !== '#' ? html`
                            <a href="${this.githubLink}" class="github-link" target="_blank">
                                View on GitHub →
                            </a>
                        ` : ''}
                    </div>
                    <div class="small-content">
                        <h2>
                            ${this.cardTitle}
                            <p>${this.cardSubtitle}</p>
                        </h2>
                        ${!this.isExpanded ? html`
                            <h3 class="details" @click="${this.expand}">
                                More Details →
                            </h3>
                        ` : ''}
                    </div>
                </span>
            </div>
        </section>
        
        <div class="spacer ${this.isExpanded ? 'expanded' : ''}"></div>
    `;
    }
}