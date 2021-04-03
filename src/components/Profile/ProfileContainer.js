import React from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../../redux/profile-reducer';
import Preloader from '../common/Preloader/Preloader';
import Profile from './Profile';


class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getProfile();
  }

  render() {
    if (!this.props.user) {
      return <Preloader />
    }
    return (
      <Profile
        user={ this.props.user }
        cities = { this.props.cities }
        BASE_URL = { this.props.BASE_URL }
      />
    )
  }
}


let mapStateToProps = (state) => ({
  user: state.profilePage.user,
  cities: state.profilePage.cities,
})
export default connect(mapStateToProps, {
  getProfile
})(ProfileContainer);