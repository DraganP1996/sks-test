import { Injectable, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";
import { filter, Observable, Subject, switchMap, takeUntil } from "rxjs";
import { EventState, getSelectedEventId, loadTopEvents, selectEvent, selectEventById, selectEventsByIds } from "src/app/store/Event";
import { getSelectedGroupId, GroupState, loadGroups, selectAllGroupsForSportId, selectedGroupId, selectgroupById } from "src/app/store/Group";
import { selectMarketByIds } from "src/app/store/Market";
import { selectMarketCategoriesByIds } from "src/app/store/MarketCategory";
import { OddState, selectOddsByIds } from "src/app/store/Odds";
import { getSelectedSport, selectAllSports, selectsportById, SportState } from "src/app/store/Sport";
import { loadSports, selectSport } from "src/app/store/Sport/actions/sport.actions";
import { Group, IEvent, Market, MarketCategory, OddData, Sport, SubEvent } from "src/app/store/store.model";
import { getSelectedSubEventId, selectSubEventById, selectSubEventsByIds, subeventSelection } from "src/app/store/Subevent";

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
        private _subeventStore: Store<EventState>,
        private _oddStore: Store<OddState>,
        private _markeCategoryStore: Store<MarketCategory<number>>,
        private _marketStore: Store<Market>) {
            this._selectedSpot$ = this._sportStore.select(getSelectedSport).pipe(filter(id => !!id), takeUntil(this._unsubscribe$));
            this._selectedGroup$ = this._groupStore.select(getSelectedGroupId).pipe(filter(id => !!id), takeUntil(this._unsubscribe$));
            this._selectedEvent$ = this._eventStore.select(getSelectedEventId).pipe(filter(id => !!id), takeUntil(this._unsubscribe$));
            this._selectedSubEvent$ = this._subeventStore.select(getSelectedSubEventId).pipe(filter(id => !!id), takeUntil(this._unsubscribe$));
        }

    /**
     * Dispatch actions for loading of Sports and Top Events
     */
    loadSports(): void {
        this._sportStore.dispatch(loadSports());
        this._eventStore.dispatch(loadTopEvents());
    }

    /**
     * Dispatch action for selection of a specific sport
     * @param id 
     */
    selectSport(id: number): void {
        this._sportStore.dispatch(selectSport({ id }));
        this._sportStore.dispatch(loadGroups({ sportId: id })); 
    }
    
    /**
     * Dispatch action for selection of a specific group
     * @param id 
     */
    selectGroup(groupId: number): void {
        this._groupStore.dispatch(selectedGroupId({ id: groupId}));
    }

    /**
     * Dispatch action for selection of a specific event
     * @param id 
     */    
    selectEvent(selectedEventId: number): void {
        this._eventStore.dispatch(selectEvent({ selectedEventId }));
    }

    /**
     * Dispatch action for selection of a specific subevent
     * @param id 
     */
    selectSubEvent(subeventId: number): void {
        this._subeventStore.dispatch(subeventSelection({ subeventId }));
    }

    /**
     * Get selected sport
     * @returns 
     */
    getSelectedSport$(): Observable<Sport | undefined> {
        return this._selectedSpot$.pipe(
            switchMap(sportId => this._sportStore.select(selectsportById(sportId)))
        )
    }

    /**
     * Get list of all sports
     * @returns 
     */
    getSportList$(): Observable<Sport[]> {
        return this._sportStore.select(selectAllSports);
    }

    /**
     * Get selected group
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
    getListOfEventsForGroup$(eventIds: number[]): Observable<IEvent[]> {
        return this._eventStore.select(selectEventsByIds(eventIds));
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

    /**
     * Get list of subevents for a specific event
     * @param subEventIds 
     * @returns 
     */
    getListOfSubeventsForEvent$(subEventIds: number[]): Observable<SubEvent<number>[]> {
        return this._subeventStore.select(selectSubEventsByIds(subEventIds))
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
     * Get selected subevent
     * @returns 
     */
    getSelectedSubevent$(): Observable<SubEvent<number> | undefined> {
        return this._selectedSubEvent$.pipe(
            switchMap(subeventId => this._subeventStore.select(selectSubEventById(subeventId))),
            // filter(subevent => !!subevent && !!subevent.activeMarketCategoryIds && !!subevent.allActiveOddsIds)
        )
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
