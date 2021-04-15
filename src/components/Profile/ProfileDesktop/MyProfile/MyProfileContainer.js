import React from 'react';
import { connect } from 'react-redux';
import { updatePersonalProfile, changePasswordProfile, changePasswordAC, changeEmailAc, changeEmailProfile } from '../../../../redux/profile-reducer';
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
        changeEmailProfile = { this.props.changeEmailProfile }

        change_password = { this.props.change_password }
        changePasswordAC = { this.props.changePasswordAC }

        change_email = { this.props.change_email }
        changeEmailAc = { this.props.changeEmailAc }
   
      />
    )
  }
}


let mapStateToProps = (state) => ({
  change_password: state.profilePage.change_password,
  change_email: state.profilePage.change_email,
})

export default connect(mapStateToProps, {
  updatePersonalProfile,

  changePasswordProfile,
  changePasswordAC,

  changeEmailAc,
  changeEmailProfile,
})(MyProfileContainer);