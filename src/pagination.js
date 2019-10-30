import React from "react"
import { Link } from "react-router-dom"

export const Pagination = props => {
    return (
        <>
            <ul>
                <li>
                    <Link to='/popular'> Get popular</Link>
                </li>
                <li>
                    <Link to='/toprated'> Get toprated</Link>
                </li>
            </ul>
        </>
    )
}