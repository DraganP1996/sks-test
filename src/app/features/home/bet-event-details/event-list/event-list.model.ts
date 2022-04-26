import { IEvent, SubEvent } from "src/app/store/store.model";

export interface EventListDictionary {
    [key: number]: EventDetails;
}

export interface EventDetails {
    event: IEvent;
    subevents?: SubEvent<number>[];
}