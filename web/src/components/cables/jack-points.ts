import { LitElement, html, css, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("jack-point")
export class JackPoint extends LitElement {
    static styles = css`
        :host {
            display: inline-block;
            position: relative;
        }

        .jack {
            width: 28px;
            height: 28px;
            cursor: pointer;
        }

        .jack-outer {
            fill: #1a1a1a;
            stroke: #333;
            stroke-width: 2;
        }

        .jack-inner {
            fill: #0a0a0a;
        }

        .jack-ring {
            fill: none;
            stroke: #444;
            stroke-width: 1;
        }

        .jack-plug {
            transition: transform 0.2s ease;
        }

        :host([connected]) .jack-plug {
            transform: scale(1);
        }

        :host(:not([connected])) .jack-plug {
            transform: scale(0);
        }
    `;

    @property({ type: String, attribute: "jack-id" })
    jackId: string = "";

    @property({ type: String })
    color: string = "#666";

    @property({ type: Boolean, reflect: true })
    connected: boolean = false;

    private resizeObserver?: ResizeObserver;

    connectedCallback() {
        super.connectedCallback();

        window.addEventListener("resize", this.reportPosition);
        window.addEventListener("scroll", this.reportPosition);

        this.resizeObserver = new ResizeObserver(() => this.reportPosition());
        this.resizeObserver.observe(document.body);

        requestAnimationFrame(() => this.reportPosition());
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener("resize", this.reportPosition);
        window.removeEventListener("scroll", this.reportPosition);
        this.resizeObserver?.disconnect();

        this.dispatchEvent(new CustomEvent("jack-removed", {
            bubbles: true,
            composed: true,
            detail: { id: this.jackId }
        }));
    }

    private reportPosition = () => {
        const rect = this.getBoundingClientRect();
        const x = rect.left + rect.width / 2 + window.scrollX;
        const y = rect.top + rect.height / 2 + window.scrollY;

        this.dispatchEvent(new CustomEvent("jack-position", {
            bubbles: true,
            composed: true,
            detail: {
                id: this.jackId,
                x,
                y,
                color: this.color
            }
        }));
    };

    protected render(): TemplateResult {
        return html`
            <svg class="jack" viewBox="-14 -14 28 28">
                <circle class="jack-outer" r="13" />
                <circle class="jack-ring" r="10" />
                <circle class="jack-inner" r="7" />
                <circle class="jack-plug" r="5" fill="${this.color}" />
            </svg>
        `;
    }
}