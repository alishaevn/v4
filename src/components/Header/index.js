import React from 'react'
import { Details, Title } from './styles'

const Header = ({ details, title }) => {
	return (
		<>
			<Title>{title}</Title>
			{details && <Details>A bit of what I’ve learned along the way</Details>}
		</>
	)
}

export default Header
