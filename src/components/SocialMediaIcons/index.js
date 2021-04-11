import React from 'react'
import Email from '../../../assets/svg/email.svg'
import Github from '../../../assets/svg/github.svg'
import Instagram from '../../../assets/svg/instagram.svg'
import LinkedIn from '../../../assets/svg/linkedin.svg'
import Twitter from '../../../assets/svg/twitter.svg'
import styled from 'styled-components'
import { devices } from '../../utilities/devices'

const SocialMediaIcons = ({ footer, marginTop }) => (
	<SocialIconsWrapper footer={footer} marginTop={marginTop}>
		<LinkTo
			href='https://www.linkedin.com/in/alishaevans/'
			target='_blank'
			footer={footer}
		>
			<LinkedIn />
		</LinkTo>
		<LinkTo
			href='https://github.com/alishaevn'
			target='_blank'
			footer={footer}
		>
			<Github />
		</LinkTo>
		<LinkTo
			href='https://instagram.com/thatgirlt0nii'
			target='_blank'
			footer={footer}
		>
			<Instagram />
		</LinkTo>
		<LinkTo
			href='https://twitter.com/thatgirlt0nii'
			target='_blank'
			footer={footer}
		>
			<Twitter />
		</LinkTo>
		<LinkTo
			href='mailto:alishaevn2@gmail.com'
			footer={footer}
		>
			<Email />
		</LinkTo>
	</SocialIconsWrapper>
)

export default SocialMediaIcons

const LinkTo = styled.a`
	height: 30px;
`

const SocialIconsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 185px;
	margin: ${({ footer, marginTop }) => footer ? `${marginTop}px 0 0` : `${marginTop}px auto 0`};

	svg {
		height: 30px;
	}

	@media ${devices.tablet} {
		width: ${({ footer }) => { if (!footer) return `230px` }};

		svg {
			height: ${({ footer }) => { if (!footer) return `35px` }};
		}
	}
`
