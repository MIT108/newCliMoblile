/* eslint-disable prettier/prettier */
import React from 'react'
import PropTypes from 'prop-types'

import contactData from '../../components/data/contact.json'

import Profile from '../../components/screens/profile/Profile'

const ProfileScreen = () => <Profile {...contactData} />

ProfileScreen.navigationOptions = () => ({
  header: null,
})

ProfileScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default ProfileScreen
