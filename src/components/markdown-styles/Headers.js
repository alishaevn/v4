import styled from 'styled-components'
import { seaFoam, white } from '../../utilities/colors'
import { devices } from '../../utilities/devices'

export const Header1 = styled.h1`
    font-family: 'poppins';
    color: ${seaFoam};
    letter-spacing: 0.5px;
    font-size: 30px;
    font-weight: 600;
    line-height: 36px;
`

export const Header2 = styled.h2`
    font-family: 'provicali';
    color: ${white};
    text-transform: uppercase;
    font-size: 20px;
    line-height: 25px;

    @media ${devices.large} {
        font-size: 30px;
    }
`

export const Header3 = styled.h3`
    font-family: 'montserrat';
    color: ${white};
    text-transform: uppercase;
`
