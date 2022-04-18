export interface SimpleItem {
    Id: number;
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
    Antepost?: number;
    NumSubevents: number;
    SportId: number;
    SportName: string;
    GroupId: number,
    GroupName: string;
    EventTypeId?: number;
    GroupOrder?: number;
    activeMarketIds?: number[];
    activeMarketCategoryIds?: number[];
    subEventIds?: number[];
}



export interface Market extends OrderableItem {
    IsNewMarket: boolean;
    ShortName: string | null;
    NumberOfParticipants?: number;
    ParticipantOddsCount?: number;
}

export interface MarketOdds extends Market {
    Odds: OddData[]
}

/** Since the normalization of the data in the store:
 * T = Market for BE response without Odds
 * T = MarketOdds for BE response with Odds
 * T = number for the store
 */
export interface MarketCategory<T> extends OrderableItem {
    Markets: T[];
    HasParticipants?: boolean;
    NumberOfParticipants?: number;
    ParticipantOddsCount?: number;
}

export interface IEventWithSubEvents extends IEvent {
    Playabilities: number[];
    Subevents: SubEvent<MarketOdds>[];
    GroupOrder: number;
}

/** Since the normalization of the data in the store:
 * T = Market for the BE resonse
 * T = number for the store
 */
export interface SubEvent<T> {
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
    Markets?: T[];
    activeMarketIds?: number[];
    activeMarketCategoryIds?: number[];
    mainActiveOddsIds?: number[];
    allActiveOddsIds?: number[];
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
    GroupedMarkets: MarketCategory<MarketOdds>[];
    SottoEventoTypeId: number;
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