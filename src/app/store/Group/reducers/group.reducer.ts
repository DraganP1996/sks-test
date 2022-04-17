import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Group } from '../../store.model';
import * as GroupActions from '../actions/group.actions';

export const groupFeatureKey = 'group';

export interface GroupState  extends EntityState<Group<number>> { 
  selectedGroupId: number | null;
}

export const adapter: EntityAdapter<Group<number>> = createEntityAdapter<Group<number>>();

export const initialState: GroupState = adapter.getInitialState({
  selectedGroupId: null,
});

export const groupReducer = createReducer(
  initialState,

  // Load groups
  on(GroupActions.loadGroupsSuccess, (state, { groups }) => {
    return adapter.upsertMany(groups, state);
  }),
  
  // Group Selection
  on(GroupActions.selectedGroupId, (state, { id }) => {
    return { ...state, selectedGroupId: id }
  }),
  
  // Set groups
  on(GroupActions.setGroups, (state, { groups }) => {
    return adapter.setMany(groups, state);
  }),

  // Upsert groups
  on(GroupActions.upsertGroups, (state, { groups }) => {
    return adapter.upsertMany(groups, state);
  }),

  // Clear groups
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