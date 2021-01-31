import { Link } from 'gatsby'
import React from 'react'
import {
	H1,
	SocialIconsWrapper,
	Welcome,
	Wrapper,
} from './styles'
import Email from '../../../assets/svg/email.svg'
import Github from '../../../assets/svg/github.svg'
import Instagram from '../../../assets/svg/instagram.svg'
import LinkedIn from '../../../assets/svg/linkedin.svg'
import Twitter from '../../../assets/svg/twitter.svg'

const Landing = () => (
	<Wrapper>
		<H1>hello</H1>
		<Welcome>{`
			my name is alisha,
			a software developer with a love for making beautiful web and mobile apps.
			thanks for stopping by.
		`}</Welcome>
		<SocialIconsWrapper>
			<Link to='/'>
				<LinkedIn />
			</Link>
			<Link to='/'>
				<Github />
			</Link>
			<Link to='/'>
				<Instagram />
			</Link>
			<Link to='/'>
				<Twitter />
			</Link>
			<Link to='/'>
				<Email />
			</Link>
		</SocialIconsWrapper>
	</Wrapper>
)

export default Landing
