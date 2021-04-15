import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import { devices } from '../../utilities/devices'

export const TitleImage = styled(GatsbyImage)`
    border-radius: 5px;
    height: 500px;
    width: 900px;
    margin-top: 20px;

    // @media ${devices.tablet} {
    //     display: flex;
    //     justify-content: space-between;
    // }
`