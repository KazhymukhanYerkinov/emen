import React from 'react';
import { connect } from 'react-redux';
import { getSubsThunk } from '../../redux/subs-reducer';
import Subscription from './Subscription';



class SubscriptionContainer extends React.Component {
  componentDidMount() {
    this.props.getSubsThunk();
  }
  render() {
    return (
      <Subscription
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
})


export default connect(mapStateToProps, { getSubsThunk })(SubscriptionContainer)