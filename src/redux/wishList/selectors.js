export const selectWishList = state => state.wishList.wishList;
export const selectWishListIsLoading = state => state.wishList.isLoading;
export const selectWishListError = state => state.wishList.error;

export const selectTotalPages = state => state.wishList.pagination.totalPages;
