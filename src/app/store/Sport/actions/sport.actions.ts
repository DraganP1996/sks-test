import { EntityMap, EntityMapOne, Predicate, Update } from "@ngrx/entity";
import { createAction, props } from "@ngrx/store";
import { Sport } from "../../store.model";

export const loadSports = createAction('[Sport/API] Load Sports');
export const loadSportsSuccess = createAction('[Sport/API] Load Sports Success', props<{ sports: Sport[] }>());
export const loadSportsFailure = createAction('[Sport/API] Load Sports', props<{ error: Error }>());

export const selectSport = createAction('[Sport List Component] Sport Selection', props<{id: number}>());

export const setSports = createAction('[Sport/API] Set Sports', props<{ sports: Sport[] }>());

export const addSport = createAction('[Sport/API] Add Sport', props<{ sport: Sport }>());

export const setSport = createAction('[Sport/API] Set Sport', props<{ sport: Sport }>());
export const upsertSport = createAction('[Sport/API] Upsert Sport', props<{ sport: Sport }>());
export const addSports = createAction('[Sport/API] Add Sports', props<{ sports: Sport[] }>());
export const upsertSports = createAction('[Sport/API] Upsert Sports', props<{ sports: Sport[] }>());
export const updateSport = createAction('[Sport/API] Update Sport', props<{ update: Update<Sport> }>());
export const updateSports = createAction('[Sport/API] Update Sports', props<{ updates: Update<Sport>[] }>());
export const mapSport = createAction('[Sport/API] Map Sport', props<{ entityMap: EntityMapOne<Sport> }>());
export const mapSports = createAction('[Sport/API] Map Sports', props<{ entityMap: EntityMap<Sport> }>());
export const deleteSport = createAction('[Sport/API] Delete Sport', props<{ id: string }>());
export const deleteSports = createAction('[Sport/API] Delete Sports', props<{ ids: string[] }>());
export const deleteSportsByPredicate = createAction('[Sport/API] Delete Sports By Predicate', props<{ predicate: Predicate<Sport> }>());
export const clearSports = createAction('[Sport/API] Clear Sports');