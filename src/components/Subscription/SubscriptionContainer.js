import React from 'react';
import { connect } from 'react-redux';
import { failError } from '../../redux/error-reducer';
import { getSubsThunk, postSubs } from '../../redux/subs-reducer';

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
        error_code = { this.props.error_code }
        error_data = { this.props.error_data }

        postSubs = { this.props.postSubs }
        failError = { this.props.failError }
      />
    )
  }
}
let mapStateToProps = (state) => ({
  subs: state.subsPage.subs,
  error_code: state.errorPage.error_code,
  error_data: state.errorPage.error_data,
  

  BASE_URL: state.appPage.BASE_URL,
})


export default connect(mapStateToProps, { getSubsThunk, postSubs, failError })(SubscriptionContainer)
