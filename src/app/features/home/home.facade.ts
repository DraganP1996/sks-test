import { Injectable, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";
import { distinctUntilChanged, filter, from, groupBy, map, mergeMap, Observable, Subject, switchMap, take, takeUntil, tap, toArray } from "rxjs";
import { EventState, getEventSubEvents, getSelectedEventId, loadTopEvents, queryEventsByIds, selectEvent, selectEventById, selectEventsByIds } from "src/app/store/Event";
import { getSelectedGroupId, GroupState, selectAllGroupsForSportId, selectedGroupId, selectgroupById } from "src/app/store/Group";
import { selectMarketByIds } from "src/app/store/Market";
import { selectMarketCategoriesByIds } from "src/app/store/MarketCategory";
import { OddState, selectOddsByIds } from "src/app/store/Odds";
import { getSelectedSportId, selectAllSports, selectsportById, SportState } from "src/app/store/Sport";
import { loadSports, selectSport } from "src/app/store/Sport/actions/sport.actions";
import { Group, IEvent, Market, MarketCategory, OddData, Sport, SubEvent } from "src/app/store/store.model";
import { getSelectedSubEventId, getSubeventsByEventId, selectSubEventById, selectSubEventsByIds, subeventSelection, SubEventState } from "src/app/store/Subevent";

@Injectable({providedIn: 'root'})
export class HomeFacade implements OnDestroy {

    private readonly _selectedSpot$: Observable<number>;
    private readonly _selectedGroup$: Observable<number>;
    private readonly _selectedEvent$: Observable<number>;
    private readonly _selectedSubEvent$: Observable<number>;
    private readonly _unsubscribe$ = new Subject<void>();

    constructor(    
        private _sportStore: Store<SportState>,
        private _groupStore: Store<GroupState>,
        private _eventStore: Store<EventState>,
        private _subeventStore: Store<SubEventState>,
        private _oddStore: Store<OddState>,
        private _markeCategoryStore: Store<MarketCategory<number>>,
        private _marketStore: Store<Market>) {
            // Get id of selected sport when changes
            this._selectedSpot$ = this._sportStore.select(getSelectedSportId);

            // Get id of selected group when changes
            this._selectedGroup$ = this._groupStore.select(getSelectedGroupId);

            // Get id of selected event when changes
            this._selectedEvent$ = this._eventStore.select(getSelectedEventId);

            // Get id of selected subevent
            this._selectedSubEvent$ = this._subeventStore.select(getSelectedSubEventId);
        }

    /**
     * Dispatch actions for loading of Sports and Top Events
     */
    loadSportsAndTopEvents(): void {
        this._sportStore.dispatch(loadSports());
        this._eventStore.dispatch(loadTopEvents());
    }

    /**
     * Dispatch selectSport Action
     * @param id 
     */
    selectSport(id: number): void {
        this._sportStore.dispatch(selectSport({ id }));
    }
    
    /**
     * Dispatch selectedGroupId Action
     * @param groupId 
     */
    selectGroup(groupId: number): void {
        this._groupStore.dispatch(selectedGroupId({ id: groupId}));
    }

    /**
     * Dispatch selectEvent Action
     * @param selectedEventId 
     */    
    selectEvent(selectedEventId: number): void {
        this._eventStore.dispatch(selectEvent({ selectedEventId }));
    }

    /**
     * Dispatch subeventSelection Action
     * @param subeventId 
     */
    selectSubEvent(subeventId: number): void {
        this._subeventStore.dispatch(subeventSelection({ subeventId }));
    }

    /**
     * Get list of all sports
     * @returns 
     */
    getSportList$(): Observable<Sport[]> {
        return this._sportStore.select(selectAllSports);
    }

    /**
     * Get selected sport when it changes
     * @returns 
     */
    getSelectedSport$(): Observable<Sport> {
        return this._selectedSpot$.pipe(
            filter(sportId => !!sportId),
            switchMap(sportId => this._sportStore.select(selectsportById(sportId)))
        )
    }

    /**
     * Get selected group when it changes
     * @returns 
     */
    getSelectedGroup$(): Observable<Group<number> | undefined> {
        return this._selectedGroup$.pipe(
            switchMap(groupId => this._groupStore.select(selectgroupById(groupId)))
        )
    }

    /**
     * Get list of available Groups for a specific sport
     * @param sportId 
     * @returns 
     */
    getListOfGroupsForSport$(sportId: number): Observable<Group<number>[]> {
        return this._groupStore.select(selectAllGroupsForSportId(sportId));
    }

    /**
     * Get list of events for a specific group
     * @param eventIds 
     * @returns 
     */
    getEventsByIds$(eventIds: number[]): Observable<IEvent[]> {
        return this._eventStore.select(queryEventsByIds(eventIds)).pipe(tap(eventIds => console.log('Found event list', eventIds)))
    }

    /**
     * Get selected event
     * @returns 
     */
    getSelectedEvent$(): Observable<IEvent | undefined> {
        return this._selectedEvent$.pipe(
            switchMap(selectedEventId => this._eventStore.select(selectEventById(selectedEventId))),
        )
    }

    getEventSubevents(eventId: number): Observable<SubEvent<number>[]> {
        return this._subeventStore.select(getSubeventsByEventId(eventId))
    }

    getGroupedSubevents(eventId: number): Observable<any> {
        return this._subeventStore.select(getSubeventsByEventId(eventId)).pipe(
            filter(subevents => !!subevents.length),
            take(1),
            mergeMap(subevents => subevents),
            map(subevent => {
                const date = subevent.StartTimeUtc.split('T')[0];
                const time = subevent.StartTimeUtc.split('T')[1];

                return { subevent, date, time }
            }),
            groupBy(formattedSubevent => formattedSubevent.date),
            mergeMap(group => group.pipe(toArray())),
            tap(data => console.log('Grouped subevents - Array version', data)),
        )
    }

    /**
     * Query store to find all odds with some specific ids
     * @param oddIds 
     * @returns 
     */
    queryOddsById$(oddIds: number[]): Observable<OddData[]> {
        return this._oddStore.select(selectOddsByIds(oddIds))
    }

    /**
     * Query store to find all market categories with some specific ids
     * @param marketCategoryIds 
     * @returns 
     */
    queryMarketCategoriesByIds$(marketCategoryIds: number[]): Observable<MarketCategory<number>[]> {
        return this._markeCategoryStore.select(selectMarketCategoriesByIds(marketCategoryIds))
    }

    /**
     * Query store to find all markets with some specific ids
     * @param marketCategoryIds 
     * @returns 
     */
    queryMarketsByIds$(marketIds: number[]): Observable<Market[]> {
        return this._marketStore.select(selectMarketByIds(marketIds))
    }

    ngOnDestroy(): void {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();  
    }
}
