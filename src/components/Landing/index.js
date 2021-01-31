import React from 'react'
import Email from '../../../assets/svg/email.svg'
import Github from '../../../assets/svg/github.svg'
import Instagram from '../../../assets/svg/instagram.svg'
import LinkedIn from '../../../assets/svg/linkedin.svg'
import Twitter from '../../../assets/svg/twitter.svg'
import {
	H1,
	LinkTo,
	SocialIconsWrapper,
	Welcome,
	Wrapper,
} from './styles'

const Landing = () => (
	<Wrapper>
		<H1>hello</H1>
		<Welcome>{`
			my name is alisha,
			a software developer with a love for making beautiful web and mobile apps.
			thanks for stopping by.
		`}</Welcome>
		<SocialIconsWrapper>
			<LinkTo href='https://www.linkedin.com/in/alishaevans/' target='_blank'>
				<LinkedIn />
			</LinkTo>
			<LinkTo href='https://github.com/alishaevn' target='_blank'>
				<Github />
			</LinkTo>
			<LinkTo href='https://instagram.com/thatgirlt0nii' target='_blank'>
				<Instagram />
			</LinkTo>
			<LinkTo href='https://twitter.com/thatgirlt0nii' target='_blank'>
				<Twitter />
			</LinkTo>
			<LinkTo href='mailto:alishaevn2@gmail.com'>
				<Email />
			</LinkTo>
		</SocialIconsWrapper>
	</Wrapper>
)

export default Landing

/*
  Resources:
  - https://www.gatsbyjs.com/plugins/gatsby-plugin-react-svg/
 */
