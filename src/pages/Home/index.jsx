import React from 'react'
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='Home'>
            <h1>This is Home</h1>
            <hr />
            <hr />

            <Link to='/cars'>
                <button>Cari Mobil</button>
            </Link>
            
        </div>
    )
}

export default Home;
