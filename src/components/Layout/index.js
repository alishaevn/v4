import React from 'react'
import Footer from '../Footer'
import NavBar from '../NavBar'
import SocialMediaIcons from '../SocialMediaIcons'
import { AppStyles, Content, Page } from './styles'

const Layout = ({ children }) => (
	<AppStyles>
		<NavBar />
		<Page>
			<SocialMediaIcons footer={false} />
			<Content>
				{children}
				<Footer />
			</Content>
		</Page>
	</AppStyles>
)

export default Layout
