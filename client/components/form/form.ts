import { html, LitElement } from 'lit';
import { ENDPOINT, CLIENT_ID, API_SECRET, MICROSITE_KEY, OWNER } from '../../constants/sales-manago-api';
import './form.scss';

export default class Form extends LitElement {

    protected render() {
        // return html`
        //     <div class="input-wrapper">
        //         <input type="email" name="email" id="email" required>
        //         <input type="submit" id="submit" value="ZAPISZ MNIE" @click="${this._sendSignInRequest}">
        //     </div>
        // `;
        return html`
            <div class="input-wrapper">
                <input type="email" name="email" id="email" required>
                <input type="submit" id="submit" value="ZAPISZ MNIE">
            </div>
        `;
    }

    private _sendSignInRequest = (e: Event) => {
        e.preventDefault();
        const requestTime = Date.now();
        const email = document.forms['newsletters'].elements['email'].value;
        const chosenNewslettersTags = [];
        const chosenNewsletters: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[type=checkbox]:checked');

        for (let i = 0; i < chosenNewsletters.length; i++) {
            chosenNewslettersTags.push(chosenNewsletters[i].value);
        }

        const message = {
            clientId: CLIENT_ID,
            apiKey: MICROSITE_KEY,
            requestTime: requestTime,
            sha: API_SECRET,
            owner: OWNER,
            email: email,
            tags: chosenNewslettersTags,
            useApiDoubleOptIn: true,
            lang: 'pl',
        };

        const request = new XMLHttpRequest();
        request.open('POST', `https://${ENDPOINT}/api/contact/upsert`, true);
        request.setRequestHeader('Accept', 'application/json, application/json');
        request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        request.onreadystatechange = () => {
            if (request.readyState === 4 && request.status === 200) {
                const response = JSON.parse(request.responseText);
                console.log(response);
            }
        };
        request.send(JSON.stringify(message));

        console.log(message);
    }

    protected createRenderRoot() {
        return this;
    }
}
