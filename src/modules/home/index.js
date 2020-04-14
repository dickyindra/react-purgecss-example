import React from "react"

const Home = () => (
    <>
        <nav className='navbar navbar-dark bg-primary'>
            <div className='container'>
                <a className='navbar-brand' href='#'>
                    React PurgeCSS Example
                </a>
                <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
                    <li className='nav-item active'>
                        <a className='nav-link' href='#'>
                            Home <span className='sr-only'>(current)</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        <div className='jumbotron jumbotron-fluid'>
            <div className='container'>
                <h1 className='display-4'>React PurgeCSS Example</h1>
                <p className='lead'>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
            </div>
        </div>
    </>
)

export default Home
