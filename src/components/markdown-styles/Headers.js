import styled from 'styled-components'
import { seaFoam, white } from '../../utilities/colors'
import { devices } from '../../utilities/devices'

export const Header1 = styled.h1`
    font-family: 'poppins';
    color: ${seaFoam};
    letter-spacing: 0.5px;
    font-size: 40px;
`

export const Header2 = styled.h2`
    font-family: 'montserrat';
    color: ${white};
    text-transform: uppercase;

    @media ${devices.laptop} {
        font-size: 30px;
    }
`

export const Header3 = styled.h3`
    font-family: 'montserrat';
    color: ${white};
    text-transform: uppercase;
`
