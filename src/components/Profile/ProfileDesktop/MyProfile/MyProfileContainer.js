import React from 'react';
import MyProfile from './MyProfile';


class MyProfileContainer extends React.Component {
  render() {
    
    const convertDate = inputFormat => {
      const pad = s => {
        return s < 10 ? '0' + s: s;
      }
      var date = new Date(inputFormat);
      return [pad(date.getDate()), pad(date.getMonth() + 1),date.getFullYear()].join('-');
    }

    let convert_date = convertDate(this.props.user.password_change_date);

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
        convert_date = { convert_date }
        
      />
    )
  }
}

export default MyProfileContainer;