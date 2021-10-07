import { html, LitElement } from 'lit';
import eventManager from '../../commons/EventManager';

interface ICardChangePayload {
    tag: string,
    isChecked: boolean,
}

export default class FormInfo extends LitElement {
    checkedCards: Array<string> = [];
    checkedCardsLength = 0;

    static get properties() {
        return {
            checkedCardsLength: {
                type: Number,
                reflect: true,
            }
        };
    }

    private _cardChangeEventHandler = (payload: ICardChangePayload) => {
        const { tag, isChecked } = payload;
        const tagIndex = this.checkedCards.indexOf(tag);

        if (isChecked && tagIndex === -1) {
            this.checkedCards.push(tag);
        }

        if (!isChecked && tagIndex !== -1) {
            this.checkedCards.splice(tagIndex, 1);
        }

        this.checkedCardsLength = this.checkedCards.length;
    }

    constructor() {
        super();

        eventManager.on('cardChange', this._cardChangeEventHandler);
    }

    render() {
        const info = this.checkedCardsLength === 0
            ? html`Wybierz newslettery i wypełnij formularz`
            : html`Wybrane newslettery: ${this.checkedCardsLength}`;

        return html`
            <span>${info}</span>
        `;
    }

    protected createRenderRoot() {
        return this;
    }
}
