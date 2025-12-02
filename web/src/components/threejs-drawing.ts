import { LitElement, html, css, CSSResult } from "lit";
import { customElement } from "lit/decorators.js";
// @ts-ignore
import { initScene } from "../../../ThreeJS-Drawing/scene.js";

@customElement("threejs-drawing")
export class ThreeJSDrawing extends LitElement {
    private cleanup?: () => void;
    private initialized = false;

    static styles: CSSResult = css`
      :host {
        display: flex;
        width: 100%;
        height: 100%;
        position: relative;
        border-radius: 0.5rem;
        overflow: hidden;
      }

      .canvas-container {
        width: 100%;
        height: 100%;
        border-radius: 0.5rem;
        overflow: hidden;
      }
    `;

    firstUpdated() {
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                this.initializeScene();
            });
        });
    }

    private initializeScene() {
        if (this.initialized) return;

        const container = this.shadowRoot?.querySelector('.canvas-container') as HTMLElement;

        if (!container) return;

        const rect = container.getBoundingClientRect();
        if (rect.width < 50 || rect.height < 50) {
            setTimeout(() => this.initializeScene(), 200);
            return;
        }

        const result = initScene(container);
        this.cleanup = result.cleanup;
        this.initialized = true;
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.cleanup?.();
        this.initialized = false;
    }

    render() {
        return html`<div class="canvas-container"></div>`;
    }
}

if (import.meta.hot) {
    import.meta.hot.accept(() => {
        window.location.reload();
    });
}

export default ThreeJSDrawing;