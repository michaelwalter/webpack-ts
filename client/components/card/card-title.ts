import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export default class CardTitle extends LitElement {
    static styles = css`
      @media (min-width: 561px) {
        div {
          margin-top: 1.5rem;
        }
      }

      span {
        font-weight: 600;
        color: var(--red);
        font-size: 0.75rem;
        line-height: 1.125rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
      }

      h4 {
        font-weight: 600;
        color: var(--dark-grey);
        font-size: 1.5rem;
        line-height: 1.75rem;
        margin: 0.5rem 0 0;
      }
    `;

    @property({ attribute: 'frequency' })
    frequency: string;

    @property({ attribute: 'title' })
    title: string;

    protected render() {
        return html`
            <div>
                <span>${this.frequency}</span>
                <h4>${this.title}</h4>
            </div>
        `;
    }
}

customElements.define('wp-card-title', CardTitle);