import styled from 'styled-components'
import { white } from '../../utilities/colors'
import { devices } from '../../utilities/devices'

const Header2 = styled.h2`
    font-family: 'quicksand';
    color: ${white};
    text-decoration: underline;

    @media ${devices.laptop} {
        font-size: 30px;
    }
`

export default Header2
