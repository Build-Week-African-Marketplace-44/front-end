import react from 'react'

import { useHistory } from 'react-router-dom'

const Footer  = () => {

    const { push } = useHistory()

    return (
            <button className='footer-button' onClick={() => {push('/about')}}>About the Team</button>

    )
}

export default Footer;
