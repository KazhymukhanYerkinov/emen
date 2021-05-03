import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getSubsThunk } from '../../redux/subs-reducer';
import Preloader from '../common/Preloader/Preloader';
import Subscription from './Subscription';



class SubscriptionContainer extends React.Component {
  componentDidMount() {
    this.props.getSubsThunk();
  }
  render() {

    if (!this.props.subs) {
      return <Preloader />
    }

    return (
      <Subscription
        BASE_URL = { this.props.BASE_URL }

        subs = { this.props.subs }
        text_list = { this.props.text_list }
        type_list = { this.props.type_list }
      />
    )
  }
}
let mapStateToProps = (state) => ({
  subs: state.subsPage.subs,
  text_list: state.subsPage.text_list,
  type_list: state.subsPage.type_list,

  BASE_URL: state.appPage.BASE_URL,
})


export default compose(
  connect(mapStateToProps, { getSubsThunk }),
  )(SubscriptionContainer)
