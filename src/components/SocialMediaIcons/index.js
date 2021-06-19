import React from 'react'
import Email from '../../../assets/svg/email.svg'
import Github from '../../../assets/svg/github.svg'
import LinkedIn from '../../../assets/svg/linkedin.svg'
import Twitter from '../../../assets/svg/twitter.svg'
import { LinkTo, SocialIconsWrapper } from './styles'

const SocialMediaIcons = ({ footer }) => (
	<SocialIconsWrapper footer={footer}>
		<LinkTo
			href='https://www.linkedin.com/in/alishaevans/'
			target='_blank'
			footer={footer}
		>
			<LinkedIn />
		</LinkTo>
		<LinkTo
			href='https://twitter.com/thatgirlt0nii'
			target='_blank'
			footer={footer}
		>
			<Twitter />
		</LinkTo>
		<LinkTo
			href='https://github.com/alishaevn'
			target='_blank'
			footer={footer}
		>
			<Github />
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
