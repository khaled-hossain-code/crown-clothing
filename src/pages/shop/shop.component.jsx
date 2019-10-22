import React, { Component } from "react";
import { useSelector } from "react-redux";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selector";

function Shop() {
  const { collections } = useSelector(
    createStructuredSelector({ collections: selectCollections })
  );

  return (
    <div>
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
}

export default Shop;
