import React from 'react'
import {
	Arrow,
	Divider,
	Line,
	Title,
	Wrapper,
} from './styles'

const Header = ({ arrow, title }) => {
	return arrow ? (
		<Wrapper arrow={arrow}>
			<Title>{title}</Title>
			<Line />
			<Arrow />
		</Wrapper>
	) : (
		<Wrapper arrow={arrow}>
			<Divider />
			<Title>{title}</Title>
		</Wrapper>
	)
}

export default Header

/*
  Resources:
  - https://www.w3schools.com/howto/howto_css_arrows.asp
 */
