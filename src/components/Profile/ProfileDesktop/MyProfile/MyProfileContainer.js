import React from 'react';
import MyProfile from './MyProfile';


class MyProfileContainer extends React.Component {
  render() {

    let initialValues = {
      email: this.props.user.email,
      name: this.props.user.first_name,
      surname: this.props.user.last_name,
      telephone: this.props.user.phone,
      city: this.props.user.city,
    }

    return (
      <MyProfile
        initialValues = { initialValues }
        user = { this.props.user }
        cities = { this.props.cities }
        
      />
    )
  }
}

export default MyProfileContainer;