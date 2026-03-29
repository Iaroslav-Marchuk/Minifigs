export const selectAllMinifigs = state => state.minifigs.all.minifigs;
export const selectAllMinifigsIsLoading = state => state.minifigs.all.isLoading;
export const selectAllMinifigsError = state => state.minifigs.all.error;

export const selectCurrentMinifig = state =>
  state.minifigs.currentMinifig.minifig;
export const selectCurrentMinifigIsLoading = state =>
  state.minifigs.currentMinifig.isLoading;
export const selectCurrentMinifigError = state =>
  state.minifigs.currentMinifig.error;

export const selectSets = state => state.minifigs.sets.foundSets;
export const selectSetsIsLoading = state => state.minifigs.sets.isLoading;
