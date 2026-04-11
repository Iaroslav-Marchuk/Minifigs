export const selectCollection = state => state.collection.collection;
export const selectCollectionIsLoading = state => state.collection.isLoading;
export const selectCollectionError = state => state.collection.error;

export const selectTotalPages = state => state.collection.pagination.totalPages;
