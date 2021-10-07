import { html, css, LitElement } from 'lit';

export default class Logo extends LitElement {
    static styles = css`
        img {
          height: 4rem;
          padding: 0.5rem 0.5rem 0.5rem 0;
          display: inline-block;
          vertical-align: middle;
        }
    `;

    protected render() {
        return html`
            <img src="https://newsletter.wpcdn.pl/source-logo/wp.svg" alt="Wirtualna Polska - Newsletter" />
        `;
    }
}