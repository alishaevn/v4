import React from 'react'
import { Details, Title } from './styles'

const Header = ({ details, title }) => {
	return (
		<>
			<Title>{title}</Title>
			{details && <Details>Just a bit of what I’ve learned along the way</Details>}
		</>
	)
}

export default Header

/*
	Resources:
	- https://www.w3schools.com/howto/howto_css_arrows.asp
 */
