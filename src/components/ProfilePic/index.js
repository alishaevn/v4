import React from 'react'
import { Img } from './styles'
import profile from '../../../assets/images/profile-pic.png'

const ProfilePic = ({ marginBottom, marginTop }) => (
	<Img
		src={profile}
		marginBottom={marginBottom}
		marginTop={marginTop}
	/>
)

export default ProfilePic
