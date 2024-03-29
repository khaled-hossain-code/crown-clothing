import React from "react";
import "./collection-overview.styles.scss";
import { useSelector } from "react-redux";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { createStructuredSelector } from "reselect";
import { selectCollectionsArr } from "../../redux/shop/shop.selector";

function CollectionOverview() {
  const { collections } = useSelector(
    createStructuredSelector({ collections: selectCollectionsArr })
  );

  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
}

export default CollectionOverview;
