import React from 'react'
import { H1, Welcome, Wrapper, poly } from './styles'
import PinkPoly from '../../../assets/svg/pink-polygon.svg'

const Landing = () => (
	<Wrapper>
		<H1>hello</H1>
		<Welcome>
			{`my name is alisha,`}<br></br>
			{`a software developer with a love for making aesthetically dope web and mobile apps.`}<br></br>
			{`thanks for stopping by.`}
			</Welcome >
			<div style={poly}>
				<PinkPoly />
			</div>
	</Wrapper>
)

export default Landing
