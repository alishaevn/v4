import styled from 'styled-components'
import { devices } from '../../utilities/devices'

export const AppStyles = styled.div`
	margin: 0 auto;
	padding: 0px 5px 30px;

	a {
		text-decoration: none;
	}

	@media ${devices.laptop} {
		max-width: 900px;
	}
`

export const Content = styled.main`
	@media ${devices.tablet} {
		margin-left: 13%;
	}
`

export const Page = styled.main`
	display: flex;
`