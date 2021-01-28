import React from 'react'
import { Divider, Title, Wrapper } from './styles'

const Header = ({ title }) => (
	<Wrapper>
		<Divider />
		<Title>{title}</Title>
	</Wrapper>
)

export default Header
