import { html, LitElement } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import newslettersList from '../../assets/mocked-data/data.json';
import { NewsletterType } from '../../types/newsletter';
import '../card/card';
import './cards-list.scss';

export default class CardsList extends LitElement {
    newsletters: NewsletterType[] = newslettersList;

    protected render() {
        return html`
            <div class="row">
                ${repeat(this.newsletters, newsletter => html`
                        <wp-card newsletter=${JSON.stringify(newsletter)} class="card-element"></wp-card>
                    `)}
            </div>
        `;
    }

    protected createRenderRoot() {
        return this;
    }
}