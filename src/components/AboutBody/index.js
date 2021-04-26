import React from 'react'
import { ProfilePic, Text } from './styles'
import UnorderedList from '../markdown-styles/UnorderedList'
import profile from '../../../assets/images/profile-pic.png'

const AboutBody = () => (
	<>
		<Text>
			👩🏾‍💻 Hello again!
		</Text>
		<Text>
			My name is Alisha Evans. I’m currently a software developer for Notch8, a web and mobile applications consultancy in San Diego, CA. Thorough, easy to follow documentation is one of my core tenets. Aside from writing here, you can find me updating the README on current projects, submitting articles for our organizational playbook or crafting comprehensive PR and ticket comments.
		</Text>
		<ProfilePic src={profile} />
		<Text>
			Before becoming a developer I worked in technical support while doing occasional freelance work in graphic design and photography. I’ve executed visual brand identities for individuals and companies. I’ve also photographed, culled and edited photos, some of which were used in professional publications. Today the majority of my designing and photography is done on a personal level as a hobby.
		</Text>
		<Text>
			On a more personal note:
			<UnorderedList>
				<li>Native San Diegan</li>
				<li>Christian</li>
				<li>HBCU graduate (#theeILove)</li>
				<li>Former athlete and coach</li>
				<li>Logofile (I used to write poetry)</li>
				<li>Puzzle builder</li>
				<li>Golden State Warriors fan</li>
			</UnorderedList>
		</Text>
		<Text>
			If you’d like to chat or just be a part of each other’s networks, reach out to me at any of the platforms below!
		</Text>
	</>
)

export default AboutBody
