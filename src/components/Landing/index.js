import React, { useEffect, createRef } from 'react'
import lottie from 'lottie-web'
import { H1, Welcome, Wrapper, poly } from './styles'
import pinkPoly from '../../../assets/animations/pink-poly.json'

const Landing = () => {
	const animationContainer = createRef()

	useEffect(() => {
		const anim = lottie.loadAnimation({
			container: animationContainer.current,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: pinkPoly
		});
		return () => anim.destroy() // optional clean up for unmounting
	}, [])

	lottie.loadAnimation({
		container: animationContainer.current, // current instance of our container!
		animationData: pinkPoly, // animation file!
		renderer: 'svg',
		loop: true,
		autoplay: true
	})

	return (
		<Wrapper>
			<H1>hello</H1>
			<Welcome>
				{`my name is alisha,`}<br></br>
				{`a software developer with a love for making aesthetically dope web and mobile apps.`}<br></br>
				{`thanks for stopping by.`}
			</Welcome >
			<div style={poly}>
				<div ref={animationContainer} />
			</div>
		</Wrapper>
	)
}

export default Landing
