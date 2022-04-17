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

/**
 * T = number for group in the store
 * T = IEvent for BE response
 */
export interface Group<T> extends OrderableItem { 
    NumQuote: number;
    Sport: string;
    SportId: number;
    Antepost: number;
    Events: T[];
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

export interface Market extends OrderableItem {
    IsNewMarket: boolean;
    ShortName: string | null;
    NumberOfParticipants?: number;
}

export interface MarketOdds extends Market {
    PartecipantOddsCount: number;
    Odds: OddData[]
}

/**
 * T = Market for BE response without Odds
 * T = MarketOdds for BE response with Odds
 * T = number for the store
 */
export interface MarketCategory<T> extends OrderableItem {
    Markets: T[]
}


export interface SubEventResponse {
    Id: number,
    Name: string,
    PublicationCode: number,
    StartTimeUtc: string,
    BetradarMatchId: number,
    BetradarMatchUid: string,
    NumQuote: number,
    EventId: number,
    EventTypeId: number,
    EventName: string,
    SportName: string,
    GroupName: string,
    Participants: number | null,
    HasParticipants: false,
    NumberOfParticipants: number,
    SottoEventoTypeId: number
    Markets: Market[]
}

export interface SubEvent {
    Id: number;
    Name: string;
    PublicationCode: number;
    StartTimeUtc: string;
    BetradarMatchId: number;
    BetradarMatchUid: string;
    NumQuote: number;
    EventId: number;
    EventTypeId: number;
    EventName: string;
    SportName: string;
    GroupName: string;
    Participants: number | null;
    HasParticipants: false;
    NumberOfParticipants: number;
    SottoEventoTypeId: number;
    marketIds: number[];
    oddIds: number[];
}

export interface SubEventDetailsResponse {
    Id: number,
    Name: string,
    PublicationCode: number,
    StartTimeUtc: string,
    BetradarMatchId: number,
    BetradarMatchUid: string,
    NumQuote: number,
    EventId: number,
    EventTypeId: number,
    EventName: string,
    SportName: string,
    GroupName: string,
    Playabilities: number[];
    GroupedMarkets: [];
}

export interface OddData {
    Id: number;
    Value: number;
    Hnd: number;
    HndType: number;
    MarketId: number;
    SelectionId: number;
    Selection: string;
    PlayabilityId: number;
    IdClasseQuotaParamInstance: number;
    MarketParams: number[];
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