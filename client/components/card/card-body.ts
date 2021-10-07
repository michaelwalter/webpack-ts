import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';

interface IAuthor {
    image?: string,
    name?: string,
    url?: string,
}

type TAuthor = IAuthor[];

export default class CardBody extends LitElement {
    static styles = css`
      .wrapper {
        margin-top: 1rem;
      }

      .author {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 1rem;
      }

      .author-photo-wrapper {
        width: 24px;
        height: 24px;
        overflow: hidden;
        border-radius: 50%;
        margin-right: 0.5rem;
      }
      
      .author-photo {
        width: 24px;
        height: 24px;
      }
      
      a.author {
        font-weight: 700;
        color: var(--medium-grey);
        text-decoration: none;
        text-transform: uppercase;
        font-size: 0.625rem;
        line-height: 0.75rem;
        letter-spacing: 0.02em;
        margin-right: 0.5rem;
      }
      
      .author-name:hover {
        text-decoration: underline;
      }
      
      .source, .source img {
        height: 1.25rem;
        margin-right: 0.5rem;
      }
      
      .source a {
        text-decoration: none;
      }
      
      .desc {
        min-height: 4.5rem;
        height: 100%;
      }
    `;

    @property({ attribute: 'description' })
    description: string;

    @property({ attribute: 'info', type: Object })
    info: {
        authors: TAuthor,
        sources: Array<string>,
    };

    protected render() {
        const authors = this.info.authors;
        const sources = this.info.sources;

        const info = authors[0]
            ? html`${repeat(authors, (author: IAuthor) => html`
                    <a href="${author.url}" target="_blank" class="author">
                        <div class="author-photo-wrapper">
                            <img src=${author.image} alt=${author.name} class="author-photo">
                        </div>
                        <span class="author-name">${author.name}</span>
                    </a>
                `)}`
            : html`
                    <div class="source">
                        ${repeat(sources, (source: any) => html`
                            <a href=${source.url} target="_blank">
                                <img src=${`https://newsletter.wpcdn.pl/source-logo/${source.image}`} alt=${source.name}>
                            </a>
                        `)}
                    </div>
            `;

        return html`
            <div class="wrapper">
                <div class="author">
                    ${info}
                </div>
                <div class="desc">${this.description}</div>
            </div>
        `;
    }
}

customElements.define('wp-card-body', CardBody);
