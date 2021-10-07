import { html, css, LitElement } from 'lit';

export default class TitleBar extends LitElement {
    static styles = css`
        h1 {
          font-weight: 700;
          font-size: 2.5rem;
          line-height: 2.75rem;
          margin: 0 0 0.5rem;
        }
      
        span {
          display: block;
          font-weight: 700;
          font-size: 1.375rem;
          line-height: 2rem;
        }
      
        @media(max-width: 560px) {
          h1 {
            font-size: 1.5rem;
            line-height: 1.75rem;
          }
          
          span {
            font-size: 1.125rem;
            line-height: 1.625rem;
          }
        }
    `;

    protected render() {
        return html`
            <div>
                <h1>Zapisz się na newsletter</h1>
                <span>i bądź na bieżąco z wszelkimi nowinkami</span>
            </div>
        `;
    }
}