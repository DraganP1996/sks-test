import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Group } from '../../store.model';
import * as GroupActions from '../actions/group.actions';

export const groupFeatureKey = 'group';

export interface GroupState  extends EntityState<Group> { }

export const adapter: EntityAdapter<Group> = createEntityAdapter<Group>();

export const initialState: GroupState = adapter.getInitialState();

export const groupReducer = createReducer(
  initialState,
  on(GroupActions.addGroup, (state, { group }) => {
    return adapter.addOne(group, state)
  }),
  on(GroupActions.setGroup, (state, { group }) => {
    return adapter.setOne(group, state)
  }),
  on(GroupActions.upsertGroup, (state, { group }) => {
    return adapter.upsertOne(group, state);
  }),
  on(GroupActions.addGroups, (state, { groups }) => {
    return adapter.addMany(groups, state);
  }),
  on(GroupActions.upsertGroups, (state, { groups }) => {
    return adapter.upsertMany(groups, state);
  }),
  on(GroupActions.updateGroup, (state, { update }) => {
    return adapter.updateOne(update, state);
  }),
  on(GroupActions.updateGroups, (state, { updates }) => {
    return adapter.updateMany(updates, state);
  }),
  on(GroupActions.mapGroup, (state, { entityMap }) => {
    return adapter.mapOne(entityMap, state);
  }),
  on(GroupActions.mapGroups, (state, { entityMap }) => {
    return adapter.map(entityMap, state);
  }),
  on(GroupActions.deleteGroup, (state, { id }) => {
    return adapter.removeOne(id, state);
  }),
  on(GroupActions.deleteGroups, (state, { ids }) => {
    return adapter.removeMany(ids, state);
  }),
  on(GroupActions.deleteGroupsByPredicate, (state, { predicate }) => {
    return adapter.removeMany(predicate, state);
  }),
  on(GroupActions.loadGroups, (state, { groups }) => {
    return adapter.setAll(groups, state);
  }),
  on(GroupActions.setGroups, (state, { groups }) => {
    return adapter.setMany(groups, state);
  }),
  on(GroupActions.clearGroups, state => {
    return adapter.removeAll({ ...state, selectedGroupId: null });
  })
);

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal

} = adapter.getSelectors();