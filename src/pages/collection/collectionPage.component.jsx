import React from "react";
import { useSelector } from "react-redux";
import "./collectionPage.styles.scss";
import { createStructuredSelector } from "reselect";
import { selectCollection } from "../../redux/shop/shop.selector";
import CollectionItem from "../../components/collection-item/collection-item.component";

export default function CollectionPage({ match }) {
  const { collectionId } = match.params;
  const { collection } = useSelector(
    createStructuredSelector({ collection: selectCollection(collectionId) })
  );
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
