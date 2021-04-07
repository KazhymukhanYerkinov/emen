import React from 'react';
import Cookie from 'js-cookie';

import Header from './Header';





class HeaderContainer extends React.Component {
  constructor(props) {
    super(props)

    // React reference
    this.toggle_button_ref = React.createRef();
    this.profile_block_ref = React.createRef();

    // React state
    this.state = {
      show_profile_block: false,
      logout: false,
    }

    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
    this.handleLogoutModal = this.handleLogoutModal.bind(this);
    this.pressTheOkButton = this.pressTheOkButton.bind(this);
    this.handleProfileBlock = this.handleProfileBlock.bind(this);
  }

  componentDidMount() {
    document.body.addEventListener('click', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleOutsideClick);
  }

  // If you click on the outside of the profile block, profile block closes
  handleOutsideClick(event) {
    const path = event.path || (event.composedPath && event.composedPath());

    if (!path.includes(this.profile_block_ref.current) && !path.includes(this.toggle_button_ref.current)) {
      if (this.state.show_profile_block) {
        this.setState({
          show_profile_block: false
        })
      }
      
    }
  }

  // Language change and cookie storage
  handleLanguageChange(language) {
    this.props.setLanguage(language);
    Cookie.set('lang', language, { expires: 30 });
  }

  // Logout modal window opens and closes
  handleLogoutModal(logout) {
    this.setState({
      logout: logout
    });
  }

  // Profile block opens and closes
  handleProfileBlock(is_open) {
    this.setState({
      show_profile_block: is_open
    });
  }

  // Press the ok button in the logout modal
  pressTheOkButton() {
    this.handleLogoutModal(false);
    this.props.logoutThunk();
  }

  render() {
    return <Header
          toggle_button_ref = { this.toggle_button_ref }
          profile_block_ref = { this.profile_block_ref }

          logout = { this.state.logout }
          show_profile_block = { this.state.show_profile_block }

          isAuth = { this.props.isAuth }
          user = { this.props.user }
          language = { this.props.language }
          BASE_URL = { this.props.BASE_URL }

          pressTheOkButton = { this.pressTheOkButton }
          handleLogoutModal = { this.handleLogoutModal }
          handleProfileBlock = { this.handleProfileBlock }
          handleLanguageChange = { this.handleLanguageChange }
      /> 
    
  }
}



export default HeaderContainer;