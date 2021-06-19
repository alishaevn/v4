import React from 'react'
import SocialMediaIcons from '../SocialMediaIcons'
import { Copyright, CTA, Inline, Wrapper } from './styles'

const Footer = () => {
	return (
		<Wrapper>
			<Inline>
				<CTA>{`don't be shy, say hi!`}</CTA>
				<SocialMediaIcons footer={true} />
			</Inline>
			<Inline>
				<Copyright>
					{`© ${new Date().getFullYear()} alishaevn. All Rights Reserved.`}
				</Copyright>
			</Inline>
		</Wrapper>
	)
}

export default Footer
