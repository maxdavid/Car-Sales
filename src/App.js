import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { buyItem, removeItem } from './actions';

const App = props => {
  const removeItem = item => {
    props.removeItem(item);
  };

  const buyItem = item => {
    props.buyItem(item);
  };

  return (
    <div className='boxes'>
      <div className='box'>
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeItem={removeItem} />
      </div>
      <div className='box'>
        <AdditionalFeatures store={props.store} buyItem={buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  additionalPrice: state.additionalPrice,
  car: state.car,
  store: state.store
});

const mapDispatchToProps = {
  buyItem,
  removeItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
