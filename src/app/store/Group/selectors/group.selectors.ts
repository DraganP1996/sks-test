import { createFeatureSelector, createSelector } from '@ngrx/store';

import { GroupState, selectAll } from '../reducers/group.reducer';

export const groupFeatureSelector = createFeatureSelector<GroupState>('groups');

export const groupsSelector = createSelector(
  groupFeatureSelector,
  (state: GroupState) => state
);

/**
 * Get group by id
 * @param groupId 
 * @returns 
 */
export const selectgroupById = (groupId: number) => createSelector(
  groupsSelector,
  groupState => groupState.entities[groupId]
);

/**
 * Get id of currently selected group
 */
export const getSelectedGroupId = createSelector(
  groupsSelector,
  groupState => groupState.selectedGroupId
)

/**
 * Get All Groups
 */
export const selectAllGroups = createSelector(
  groupsSelector,
  selectAll
);

/**
 * Get all groups for a specific sport
 * @param sportId 
 * @returns 
 */
export const selectAllGroupsForSportId = (sportId: number) => createSelector(
  selectAllGroups,
  group => group.filter(group => group.SportId === sportId)
);

/**
 * Get all Event ids for a specific group
 * @param groupId 
 * @returns 
 */
export const selectAllEventsForGroup = (groupId?: number) => createSelector(
  selectgroupById(groupId!),
  group => !!group ? group.Events : []
);