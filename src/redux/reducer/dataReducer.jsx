const initData = {
    data: []
};

const dataReducer = (state = initData, action) => {
    switch (action.type) {
        case "FETCHING_DATA":
            return {
                ...state,
                data: action.payload,
            } 
        default: return state
    }
}

export default dataReducer;