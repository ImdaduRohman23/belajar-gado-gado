import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../redux/action/getData';

const CarsRedux = () => {
    const props = useSelector(a => a);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData())
    }, [])

    console.log(props)
    return (
        <div>
            <h1>DATA INI DIPEROLEH MENGGUNAKAN STATE MANAGEMENT REDUX</h1>
        </div>
    )
}

export default CarsRedux
