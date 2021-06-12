import React from 'react'
import { H1, Welcome, Wrapper } from './styles'

const Landing = () => (
    <Wrapper>
        <H1>hello</H1>
        <Welcome>
            {`my name is alisha,`}<br></br>
            {`a software developer with a love for making aesthetically dope web and mobile apps.`}<br></br>
            {`thanks for stopping by.`}
        </Welcome >
    </Wrapper>
)

export default Landing
