export interface SimpleItem {
    id: number;
    Name: string;
}

export interface OrderableItem extends SimpleItem {
    Order: number;
}

export interface Sport extends OrderableItem {
    NumSubevents: number;
    NumQuote: number;
    Antepost: number;
}

export interface GroupResponse extends OrderableItem {
    NumQuote: number;
    Sport: string;
    SportId: number;
    Antepost: number;
    Events: IEvent[];
}

export interface Group extends OrderableItem { 
    NumQuote: number;
    Sport: string;
    SportId: number;
    Antepost: number;
    Events: number[];
}

export interface IEvent extends OrderableItem {
    Antepost: number;
    NumSubevents: number;
    SportId: number;
    SportName: string;
    GroupId: number,
    GroupName: string;
    EventTypeId: number;
    GroupOrder: number;
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


export interface SportResponse {

}

export interface TopEventResponse {
    Id: number,
    Order: number,
    Name: string,
    NumSubevents: number,
    SportId: number,
    SportName: string,
    GroupId: number,
    GroupName: string
}