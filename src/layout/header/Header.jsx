import React, { Fragment } from 'react'
import './Header.css'
export const HeaderContent = () => {

    const links = [
        { view: 'Home', url: 'http://google.com.ar' },
        { view: 'Gallery', url: 'http://youtube.com' },
        { view: 'Contact', url: 'dasds' },
        { view: 'About', url: 'algo' }
    ]

    return (
        <Fragment>

            <nav>
                <ul>
                    {links.map((link, i) => {
                        return (
                            <li key={i} className="list-item">
                                {link.view}
                            </li>
                        )

                    })}
                </ul>
                <div>
                    SUB TITLE
                </div>
            </nav>

        </Fragment>

    )
}