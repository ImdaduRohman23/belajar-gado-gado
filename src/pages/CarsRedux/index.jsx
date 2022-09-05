import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

const CarsRedux = () => {
    const props = useSelector(a => a);
    const dispatch = useDispatch();

    useEffect(() => {
        axios
            .get('https://reqres.in/api/users?page=2')
            .then(res => {
                dispatch({
                    type: "FETCHING_DATA",
                    payload: res.data.data
                })
            })
            .catch(err => err)
        }, [])

        console.log(props)
    return (
        <div>
            <h1>DATA INI DIPEROLEH MENGGUNAKAN STATE MANAGEMENT REDUX</h1>
        </div>
    )
}

export default CarsRedux
