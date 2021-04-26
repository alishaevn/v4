import React from 'react'
import SEO from 'react-seo-component'
import styled from 'styled-components'
import AboutText from '../components/AboutText'
import Header from '../components/Header'
import Layout from '../components/Layout'
import useSiteMetadata from '../hooks/useSiteMetadata'
import { devices } from '../utilities/devices'
import profile from '../../assets/images/profile-pic.png'

const About = () => {
	const {
		description,
		title,
		image,
		siteUrl,
		siteLanguage,
		siteLocale,
		twitterUsername,
	} = useSiteMetadata()

	return (
		<Layout>
			<SEO
				title={title}
				description={description}
				image={`${siteUrl}${image}`}
				pathname={siteUrl}
				siteLanguage={siteLanguage}
				siteLocale={siteLocale}
				twitterUsername={twitterUsername}
			/>
			<ProfilePic src={profile} />
			<Header title='about me' />
			<AboutText />
		</Layout>
	)
}

export default About

const ProfilePic = styled.img`
	width: 100%;
	margin-bottom: 25px;
	margin-top: 25px;
	display: block;
	object-fit: cover;
	height: 175px;
	object-position: 20% 25%;

	@media ${devices.tablet} {
		height: 175px;
		width: 175px;
		margin-top: 110px;
		margin-bottom: 110px;
	}
`