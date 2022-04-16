import { createFeatureSelector, createSelector } from '@ngrx/store';

import { GroupState, selectAll } from '../reducers/group.reducer';

export const groupFeatureSelector = createFeatureSelector<GroupState>('groups');

export const groupsSelector = createSelector(
  groupFeatureSelector,
  (state: GroupState) => state
);

export const selectgroupById = (groupId: number) => createSelector(
  groupsSelector,
  groupState => groupState.entities[groupId]
);

export const selectAllGroups = createSelector(
  groupsSelector,
  selectAll
);

export const selectAllGroupsForSportId = (sportId: number) => createSelector(
  selectAllGroups,
  group => group.filter(group => group.SportId === sportId)
)

export const selectAllEventsForGroup = (groupId: number) => createSelector(
  selectgroupById(groupId),
  group => group?.Events
)