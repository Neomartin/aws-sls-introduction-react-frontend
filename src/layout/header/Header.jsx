import React, { Fragment } from 'react'
import './Header.css'
export const Header = () => {

    const links = [
        { view: 'Home', url: 'http://google.com.ar' },
        { view: 'Gallery', url: 'http://youtube.com' },
        { view: 'Contact', url: 'dasds' },
        { view: 'About', url: 'algo' }
    ]

    return (
        <Fragment>
            <header className="header">
                <nav>
                    <ul>
                        {links.map(link => {
                            return (
                                <li className="list-item">
                                    {link.view}
                                </li>
                            )

                        })}
                    </ul>
                </nav>
            </header>
            <div>
                SUB TITLE
            </div>
        </Fragment>

    )
}