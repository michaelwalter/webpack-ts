import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { NewsletterType } from '../../types/newsletter';
import './card-title';
import './card-photo';
import './card-body';
import './card-footer';
import './card.scss';

export default class Card extends LitElement {
    @property({attribute: 'newsletter', type: Object})
    newsletter: NewsletterType;

    protected render() {
        const info = {
            sources: this.newsletter?.source,
            authors: this.newsletter?.author,
        };

        return html`
                    <div id=${this.newsletter?.id} class="card-wrapper">
                        <div>
                            <wp-card-photo src=${this.newsletter?.photo}></wp-card-photo>
                            <wp-card-title frequency=${this.newsletter?.frequency} title=${this.newsletter?.title}></wp-card-title>
                            <wp-card-body info=${JSON.stringify(info)} description=${this.newsletter?.description}></wp-card-body>
                        </div>
                        <wp-card-footer tag=${this.newsletter?.tag} preview=${this.newsletter?.preview}></wp-card-footer>
                    </div>
                `;
    }

    protected createRenderRoot() {
        return this;
    }
}

customElements.define('wp-card', Card);
