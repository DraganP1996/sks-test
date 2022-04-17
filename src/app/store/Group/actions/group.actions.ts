import { EntityMap, EntityMapOne, Predicate, Update } from "@ngrx/entity";
import { createAction, props } from "@ngrx/store";
import { Group, IEvent } from "../../store.model";

const LOAD_GROUPS = '[Group/API] Load Sport\'s Groups';
const LOAD_GROUPS_SUCCESS = '[Group/API] Load Sport\'s Groups Success';
const LOAD_GROUPS_FAILURE = '[Group/API] Load Sport\'s Groups Failure';
const SELECTED_GROUP_ID = '[Group List] Group Selection';
const SET_GROUPS = '[Group/API] Set Groups';
const UPSERT_GROUPS = '[Group/API] Upsert Groups';
const CLEAR_GROUPS = '[Group/API] Clear Groups';

// LOAD GROUPS FOR SPECIFIC SPORT ID
export const loadGroups = createAction(LOAD_GROUPS, props<{ sportId: number }>());
export const loadGroupsSuccess = createAction(LOAD_GROUPS_SUCCESS, props<{ groups: Group[], events: IEvent[] }>());
export const loadGroupsFailure = createAction(LOAD_GROUPS_FAILURE, props<{ error: Error }>());

// GROUP SELECTION
export const selectedGroupId = createAction(SELECTED_GROUP_ID, props<{id: number}>());

// SET/UPSERT GROUP
export const setGroups = createAction(SET_GROUPS, props<{ groups: Group[] }>());
export const upsertGroups = createAction(UPSERT_GROUPS, props<{ groups: Group[] }>());

// CLEAR GROUP
export const clearGroups = createAction(CLEAR_GROUPS);