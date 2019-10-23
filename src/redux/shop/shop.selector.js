import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsArr = createSelector(
  [selectCollections],
  collections => Object.values(collections)
)

export const selectCollection = collectionName => {
  return createSelector(
    [selectCollections],
    collections => collections[collectionName]
  );
};
