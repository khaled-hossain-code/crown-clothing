import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselct";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selector";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "./collectionPage.component";
import { selectCollections } from "../../redux/shop/shop.selector";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);
