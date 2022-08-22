import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Cars = () => {
    const [mobil, setMobil] = useState([]);

    useEffect(() => {
        axios.get('https://bootcamp-rent-car.herokuapp.com/admin/car')
            .then((res) => setMobil(res.data))
            .catch((err) => console.log(err))
    }, [])

    // console.log(mobil)

    return (
        <div>
            <h2>Cari Mobil</h2>
            {!!mobil.length ? 
                (mobil.map((item) => (
                    <>
                        <p>{item.name}</p>
                        <Link to={`/detail/${item.id}`}>
                            <button>detail</button>
                            <img src={item.image} alt="" />
                        </Link>
                    </>
                ))) : (
                    <p>Loading dulu, sabar!</p>
                )
            }
        </div>
    )
}

export default Cars
