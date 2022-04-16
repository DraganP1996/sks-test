import { EntityMap, EntityMapOne, Predicate, Update } from "@ngrx/entity";
import { createAction, props } from "@ngrx/store";
import { Group, IEvent } from "../../store.model";

export const loadGroups = createAction('[Group/API] Load Groups For Sport', props<{ sportId: number }>());
export const loadGroupsSuccess = createAction('[Group/API] Load Groups For Sport Success', props<{ groups: Group[], events: IEvent[] }>());
export const loadGroupsFailure = createAction('[Group/API] Load Groups For Sport Failure', props<{ error: Error }>());


export const setGroups = createAction('[Group/API] Set Groups', props<{ groups: Group[] }>());
export const addGroup = createAction('[Group/API] Add Group', props<{ group: Group }>());
export const setGroup = createAction('[Group/API] Set Group', props<{ group: Group }>());
export const upsertGroup = createAction('[Group/API] Upsert Group', props<{ group: Group }>());
export const addGroups = createAction('[Group/API] Add Groups', props<{ groups: Group[] }>());
export const upsertGroups = createAction('[Group/API] Upsert Groups', props<{ groups: Group[] }>());
export const updateGroup = createAction('[Group/API] Update Group', props<{ update: Update<Group> }>());
export const updateGroups = createAction('[Group/API] Update Groups', props<{ updates: Update<Group>[] }>());
export const mapGroup = createAction('[Group/API] Map Group', props<{ entityMap: EntityMapOne<Group> }>());
export const mapGroups = createAction('[Group/API] Map Groups', props<{ entityMap: EntityMap<Group> }>());
export const deleteGroup = createAction('[Group/API] Delete Group', props<{ id: string }>());
export const deleteGroups = createAction('[Group/API] Delete Groups', props<{ ids: string[] }>());
export const deleteGroupsByPredicate = createAction('[Group/API] Delete Groups By Predicate', props<{ predicate: Predicate<Group> }>());
export const clearGroups = createAction('[Group/API] Clear Groups');