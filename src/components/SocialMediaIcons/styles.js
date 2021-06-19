import styled from 'styled-components'
import { devices } from '../../utilities/devices'

export const LinkTo = styled.a`
	height: 30px;

    @media ${devices.medium} {
        height: 45px;
    }
`

export const SocialIconsWrapper = styled.div`
    display: ${({ footer }) => footer ? 'flex' : 'none' };
	justify-content: space-between;
	margin-top: 10px;
	flex-direction: row;
    width: 145px;

	svg {
		height: 30px;
	}

	@media ${devices.medium} {
        display: ${({ footer }) => footer ? 'none' : 'flex' };
        margin-top: 0;
        flex-direction: column;
        height: 90vh;
        justify-content: end;
        position: fixed;

		svg {
			height: 35px};
		}
	}
`
