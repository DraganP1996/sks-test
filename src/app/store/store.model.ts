export interface SimpleItem {
    id: number;
    name: string;
}

export interface OrderableItem extends SimpleItem {
    order: number;
}

export interface Sport extends OrderableItem {
    numSubEvents: number;
    numQuote: number;
    antePost: boolean;
}

export interface Group extends OrderableItem {
    numQuote: number;
    antePost: boolean;
    sportId: number,
}

export interface IEvent extends OrderableItem {
    antePost: boolean;
    numSubevents: number;
    eventTypeId: number;
    groupOrder: number;
}

export interface MarketCategory extends OrderableItem { }

export interface Market extends OrderableItem {
    isNewMarket: boolean;
    shortName: string;
    numberOfPartecipants: number;
}

export interface SubEvent extends OrderableItem {
    publicationCode: number;
    startTimeUtc: string;
    betradarMatchId: number,
    betradarMatchUid: string,
    numQuote: number,
    eventId: number,
    eventTypeId: number
}