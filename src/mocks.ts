import { IEvent, IEventStoreEvent, IEventStoreService } from "./interfaces";

export class MockEventStoreService implements IEventStoreService {
    private streams: { [key: string]: IEventStoreEvent[] } = {};
    public append(name: string, event: IEvent): Promise<void> {
        if (!this.streams[name]) {
            this.streams[name] = [];
        }
        this.streams[name].push({
            data: event.data,
            type: event.type
        } as IEventStoreEvent);
        return Promise.resolve();
    }
}

export function findMockCall(
    mockCalls: [streamName: string, event: IEvent],
    streamName: string,
    orderId: string,
    type: string
) {
    return (
        mockCalls.find(call => {
            return (
                call[0] === streamName &&
                call[1].data?.id === orderId &&
                call[1].type === type
            );
        }) || null
    );
}
