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

            <nav style={{ width: '100%', textAlign: 'left' }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png" alt="" height={40}/>
            </nav>

        </Fragment>

    )
}