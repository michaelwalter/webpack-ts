interface ISubscribers {
    [key: string]: Array<() => void>
}

type ISubscriberHandler = (argument?: any) => void;

class EventManager {
    private subscribers: ISubscribers = {};

    private validateNewEventSubscriber (event: string, handler: ISubscriberHandler) {
        const handlerCheckSum = handler.toString();
        let valid = true;

        this.subscribers[event].forEach((subscriber: ISubscriberHandler) => {
            if (subscriber.toString() === handlerCheckSum) {
                valid = false;
            }
        });

        return valid;
    }

    public on(event: string, handler: ISubscriberHandler): void {
        this.subscribers[event] = this.subscribers[event] || [];
        if (this.validateNewEventSubscriber(event, handler)) {
            this.subscribers[event].push(handler);
        }
    }

    public emit<T>(event: string, payload?: T): void {
        const subscriber = this.subscribers[event] || [];

        subscriber.forEach((handler: ISubscriberHandler) => {
            handler(payload);
        });
    }
}

const eventManager = new EventManager();

export default eventManager;
