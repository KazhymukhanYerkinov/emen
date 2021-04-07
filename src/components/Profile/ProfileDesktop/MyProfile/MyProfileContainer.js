import React from 'react';
import { convertDate } from '../../../../utils/convertToDate';
import MyProfile from './MyProfile';


class MyProfileContainer extends React.Component {
  render() {
    
    let convert_date = convertDate(this.props.user.password_change_date);

    return (
      <MyProfile
        user = { this.props.user }
        cities = { this.props.cities }
        updatePersonalProfile = { this.props.updatePersonalProfile }
        convert_date = { convert_date }

        
      />
    )
  }
}

export default MyProfileContainer;