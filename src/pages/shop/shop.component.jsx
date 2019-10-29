import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collectionPage.component";
import { firestore } from "../../firebase/firebase.utils";
import { convertCollectionSnapshotToMap } from "../../firebase/fireStore.utils";
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  state = {
    isLoading: true
  }

  componentDidMount() {
    const collectionRef = firestore.collection("collection");

    collectionRef.get().then(collectionData => {
      const collectionsMap = convertCollectionSnapshotToMap(collectionData);
      this.props.updateCollections(collectionsMap);
      this.setState({isLoading: false});
    });
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={isLoading} {...props}/>} />
        {/* <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />*/}
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props}/>}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(
  undefined,
  mapDispatchToProps
)(ShopPage);
