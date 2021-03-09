import React from 'react'
import Logo from '../Logo'
import SocialMediaIcons from '../SocialMediaIcons'
import logo from '../../../assets/images/seafoam_horizontal.png'
import { Copyright, CTA, Inline, Wrapper } from './styles'

const Footer = () => {
	return (
		<Wrapper>
			<Inline>
				<CTA>{`don't be shy, say hi!`}</CTA>
				<SocialMediaIcons footer={true} marginTop={10} />
			</Inline>
			<Inline>
				<Copyright>
					{`©2021. Designed and developed by:`}
				</Copyright>
				<Logo footer={true} src={logo} />
			</Inline>
		</Wrapper>
	)
}

export default Footer
