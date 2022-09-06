import axios from "axios"


export const getData = (param) => (dispatch) => {
    axios
        .get('https://reqres.in/api/users?page=2')
        .then(res => {
            dispatch({
                type: "FETCHING_DATA",
                payload: res.data.data
            })
        })
        .catch(err => err)
}