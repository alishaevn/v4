import { Link } from 'gatsby'
import React from 'react'
import {
	H1,
	SocialIcon,
	SocialIconsWrapper,
	Welcome,
	Wrapper,
} from './styles'
import email from '../../../assets/images/email.png'
import github from '../../../assets/images/github.png'
import instagram from '../../../assets/images/instagram.png'
import linkedin from '../../../assets/images/linkedin.png'
import twitter from '../../../assets/images/twitter.png'

const Landing = () => (
	<Wrapper>
		<H1>hello</H1>
			my name is alisha,
			a software developer with a love for making beautiful web and mobile apps.
			thanks for stopping by.
		</Welcome>
		<SocialIconsWrapper>
			<Link to='/'>
				<SocialIcon src={linkedin} />
			</Link>
			<Link to='/'>
				<SocialIcon src={github} />
			</Link>
			<Link to='/'>
				<SocialIcon src={instagram} />
			</Link>
			<Link to='/'>
				<SocialIcon src={twitter} />
			</Link>
			<Link to='/'>
				<SocialIcon src={email} />
			</Link>
		</SocialIconsWrapper>
	</Wrapper>
)

export default Landing
