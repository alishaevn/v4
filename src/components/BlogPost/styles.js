import styled from 'styled-components'
import Img from 'gatsby-image'
import { devices } from '../../utilities/devices'
import { coral, seaFoam } from '../../utilities/colors'
import '../../utilities/typography.scss'

export const Image = styled(Img)`
  border-radius: 5px;
`

export const PostWrapper = styled.div`
	background: ${({ background }) => background ? `${coral}` : 'transparent'}
`