import styled from 'styled-components'
import { devices } from '../../utilities/devices'

export const AppStyles = styled.div`
	margin: 0 auto;
	padding: 0px 5px 30px;

	a {
		text-decoration: none;
	}
`

export const Content = styled.section`
	max-width: 100%;

	@media ${devices.medium} {
		max-width: 87%;
		margin-left: 13%;
	}
`

export const Page = styled.main`
	display: flex;
`
