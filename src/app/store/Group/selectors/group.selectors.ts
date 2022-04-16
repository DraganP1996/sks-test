import { EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Group } from '../../store.model';
import * as fromGroup from '../reducers/group.reducer';

export const selectGroupState = createFeatureSelector<fromGroup.GroupState>(
  fromGroup.groupFeatureKey
);


export const selectGroupsState = createFeatureSelector<EntityState<Group>>('group');

export const selectgroupById = (groupId: number) => createSelector(
  selectGroupsState,
  groupState => groupState.entities[groupId]
);


export const selectAllCourses = createSelector(
  selectGroupsState,
  fromGroup.selectAll
);