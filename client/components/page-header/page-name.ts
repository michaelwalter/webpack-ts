import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export default class PageName extends LitElement {
    static styles = css`
        span {
          display: inline-block;
          font-weight: 700;
          color: var(--white);
          font-size: 1.5rem;
          line-height: 1rem;
          padding: 0.75rem 1rem;
          background: var(--red);
          border-radius: 1.5rem;
          vertical-align: middle;
        }
      
        @media(max-width: 320px) {
          span {
            font-size: 1.2rem;
            border-radius: 1.2rem;
          }
        }
    `;

    @property({ attribute: 'name' })
    name: string

    protected render() {
        return html`
            <span>${this.name}</span>
        `;
    }
}