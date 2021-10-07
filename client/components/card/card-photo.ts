import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export default class CardPhoto extends LitElement {
    static styles = css`
      div {
        width: 100%;
        height: 180px;
        overflow: hidden;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
      
      @media(max-width: 560px) {
        div {
          display: none;
        }
      }
    `;

    @property({ attribute: 'src' })
    src: string;

    protected render() {
        return html`
            <div style="background-image: url(${this.src})">
            </div>
        `;
    }
}

customElements.define('wp-card-photo', CardPhoto);
