import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import eventManager from '../../commons/EventManager';

export let numberOfNewsletters: number;

export default class CardFooter extends LitElement {
    @property({ attribute: 'tag'})
    tag: string;

    protected render() {
        return html`
            <div class="card-footer">
                <div class="sign-in">
                    <input type="checkbox" id=${this.tag} value=${this.tag} class="sign-me-checkbox" @change=${this._countNewsletters}/>
                    <label for=${this.tag}>zapisz mnie</label>
                </div>
                <a href="" target="_blank">zobacz podgląd</a>
            </div>
        `;
    }

    private _countNewsletters(event: Event) {
        event.preventDefault();
        const targetElement = <HTMLInputElement>event.target;
        eventManager.emit('cardChange', { tag: this.tag, isChecked: targetElement.checked });
    }

    protected createRenderRoot() {
        return this;
    }
}

customElements.define('wp-card-footer', CardFooter);
