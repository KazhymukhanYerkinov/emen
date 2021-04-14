import React from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../../redux/profile-reducer';
import Preloader from '../common/Preloader/Preloader';
import Profile from './Profile';


class ProfileContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      screen_orientation: true
    }
  }
  detectWindowOrientation = () => {
    if (window.orientation === 90 && window.innerHeight >= 700) {
      this.setState({ screen_orientation: true });
    }
    else if (window.orientation === 0 && window.innerHeight <= 700) {
      this.setState({ screen_orientation: false });
    }
  }

  componentDidMount() {
    this.props.getProfile();
    
    if (window.innerWidth >= 700) {
      this.setState({ screen_orientation: true });
    }
    else {
      this.setState({ screen_orientation: false });
    }

    window.addEventListener("orientationchange", this.detectWindowOrientation, false);
  }

  componentWillUnmount() {
    window.removeEventListener("orientationchange", this.detectWindowOrientation, false);
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

        screen_orientation = { this.state.screen_orientation }
      />
    )
  }
}


let mapStateToProps = (state) => ({
  user: state.profilePage.profile_full_data,
  cities: state.profilePage.cities,
})
export default connect(mapStateToProps, {
  getProfile,
})(ProfileContainer);