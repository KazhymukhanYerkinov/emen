import React from 'react';
import { connect } from 'react-redux';
import { updatePersonalProfile, changePasswordProfile, changePasswordAC } from '../../../../redux/profile-reducer';
import { convertDate } from '../../../../utils/convertToDate';
import MyProfile from './MyProfile';


class MyProfileContainer extends React.Component {
  render() {
    
    let convert_date = convertDate(this.props.user.password_change_date);

    return (
      <MyProfile
        user = { this.props.user }
        cities = { this.props.cities }
        convert_date = { convert_date }
        
        updatePersonalProfile = { this.props.updatePersonalProfile }
        changePasswordProfile = { this.props.changePasswordProfile }

        change_password = { this.props.change_password }
        changePasswordAC = { this.props.changePasswordAC }
   
      />
    )
  }
}


let mapStateToProps = (state) => ({
  change_password: state.profilePage.change_password
})

export default connect(mapStateToProps, {
  updatePersonalProfile,
  changePasswordProfile,
  changePasswordAC,
})(MyProfileContainer);