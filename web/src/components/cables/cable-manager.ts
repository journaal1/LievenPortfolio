import { LitElement, html, css, svg, TemplateResult, SVGTemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";

interface JackPosition {
    id: string;
    x: number;
    y: number;
    color: string;
}

export interface CableConnection {
    from: string;
    to: string;
    color: string;
}


@customElement("cable-manager")
export class CableManager extends LitElement {
    static styles = css`
        :host {
            display: block;
            position: relative;
        }

        .cable-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 999;
        }

        .cable-svg {
            position: absolute;
            top: 0;
            left: 0;
            overflow: visible;
        }

        .cable {
            fill: none;
            stroke-linecap: round;
        }

        .cable-shadow {
            fill: none;
            stroke: rgba(0, 0, 0, 0.2);
            stroke-width: 10;
            stroke-linecap: round;
        }

        .cable-body {
            stroke-width: 6;
        }

        .cable-highlight {
            stroke-width: 2;
            opacity: 0.4;
        }
    `;

    @property({ type: Array })
    connections: CableConnection[] = [];

    @state()
    private jackPositions: Map<string, JackPosition> = new Map();

    @state()
    private pageHeight: number = 0;

    @state()
    private pageWidth: number = 0;

    connectedCallback() {
        super.connectedCallback();

        this.addEventListener("jack-position", this.handleJackPosition as EventListener);
        this.addEventListener("jack-removed", this.handleJackRemoved as EventListener);

        this.updatePageSize();
        window.addEventListener("resize", this.updatePageSize);

        // Update on scroll to handle fixed positioning
        window.addEventListener("scroll", this.requestRender);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener("jack-position", this.handleJackPosition as EventListener);
        this.removeEventListener("jack-removed", this.handleJackRemoved as EventListener);
        window.removeEventListener("resize", this.updatePageSize);
        window.removeEventListener("scroll", this.requestRender);
    }

    private requestRender = () => {
        this.requestUpdate();
    };

    private updatePageSize = () => {
        this.pageHeight = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight
        );
        this.pageWidth = Math.max(
            document.body.scrollWidth,
            document.documentElement.scrollWidth
        );
    };

    private handleJackPosition = (e: CustomEvent) => {
        const { id, x, y, color } = e.detail;
        this.jackPositions = new Map(this.jackPositions).set(id, { id, x, y, color });
    };

    private handleJackRemoved = (e: CustomEvent) => {
        const newPositions = new Map(this.jackPositions);
        newPositions.delete(e.detail.id);
        this.jackPositions = newPositions;
    };

    private calculateCablePath(from: JackPosition, to: JackPosition): string {
        const scrollY = window.scrollY;

        const fromX = from.x;
        const fromY = from.y - scrollY;
        const toX = to.x;
        const toY = to.y - scrollY;

        const dx = toX - fromX;
        const dy = toY - fromY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const sag = Math.min(distance * 0.25, 120);

        const offset = distance * 0.1;

        return `M ${fromX} ${fromY} C ${fromX + offset} ${fromY + sag * 0.5}, ${toX - offset} ${toY + sag * 0.5}, ${toX} ${toY}`;
    }

    private renderCable(connection: CableConnection): SVGTemplateResult {
        const from = this.jackPositions.get(connection.from);
        const to = this.jackPositions.get(connection.to);

        if (!from || !to) return svg``;

        const path = this.calculateCablePath(from, to);

        return svg`
            <g class="cable">
                <path class="cable-shadow" d="${path}" transform="translate(2, 4)" />
                <path class="cable-body" d="${path}" stroke="${connection.color}" />
            </g>
        `;
    }

    protected render(): TemplateResult {
        return html`
            <div class="cable-overlay">
                <svg 
                    class="cable-svg" 
                    width="${this.pageWidth}" 
                    height="${this.pageHeight}"
                    viewBox="0 0 ${this.pageWidth} ${window.innerHeight}"
                >
                    ${this.connections.map(conn => this.renderCable(conn))}
                </svg>
            </div>
            <slot></slot>
        `;
    }
}