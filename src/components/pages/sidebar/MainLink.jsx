import React from 'react'
import { Link } from 'react-router-dom'
const MainLink = ({ tolink, namelink }) => {
    return (
        <Link as='a' className="collapse-item" to={tolink}>{namelink}</Link>
    )
}

export default MainLink
