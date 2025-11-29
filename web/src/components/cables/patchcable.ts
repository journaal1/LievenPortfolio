import { LitElement, html, css, svg, TemplateResult, SVGTemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

export interface Jack {
    id: string;
    x: number;
    y: number;
}

export interface Cable {
    from: string;
    to: string;
    color: string;
}

@customElement("patch-cable")
export class PatchCable extends LitElement {
    static styles = css`
        :host {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1000;
        }

        svg {
            width: 100%;
            height: 100%;
        }

        .cable {
            fill: none;
            stroke-width: 6;
            stroke-linecap: round;
        }

        .cable-highlight {
            fill: none;
            stroke-width: 8;
            stroke-linecap: round;
            opacity: 0.3;
        }

        .jack {
            pointer-events: auto;
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
    `;

    @property({ type: Array })
    jacks: Jack[] = [];

    @property({ type: Array })
    cables: Cable[] = [];

    private calculateCablePath(from: Jack, to: Jack): string {
        const dx = to.x - from.x;
        const dy = to.y - from.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const sag = Math.min(distance * 0.3, 150);

        const midX = (from.x + to.x) / 2;
        const midY = (from.y + to.y) / 2 + sag;

        return `M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`;
    }

    private renderCable(cable: Cable): SVGTemplateResult {
        const fromJack = this.jacks.find(j => j.id === cable.from);
        const toJack = this.jacks.find(j => j.id === cable.to);

        if (!fromJack || !toJack) return svg``;

        const path = this.calculateCablePath(fromJack, toJack);

        return svg`
            <path class="cable-highlight" d="${path}" stroke="${cable.color}" />
            <path class="cable" d="${path}" stroke="${cable.color}" />
        `;
    }

    private renderJack(jack: Jack): SVGTemplateResult {
        return svg`
            <g class="jack" transform="translate(${jack.x}, ${jack.y})">
                <circle class="jack-outer" r="14" />
                <circle class="jack-inner" r="8" />
                <circle class="jack-ring" r="11" />
            </g>
        `;
    }

    protected render(): TemplateResult {
        return html`
            <svg>
                ${this.cables.map(cable => this.renderCable(cable))}
                ${this.jacks.map(jack => this.renderJack(jack))}
            </svg>
        `;
    }
}