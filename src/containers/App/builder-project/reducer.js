import {
    GET_CATEGORY_LIST,
    GET_CATEGORY_LIST_SUCCESS,
    GET_CATEGORY_LIST_FAIL,
} from './constant'
import get from 'lodash/get'
const initialState = {
    apiState: "", // loading, success, error
    list:null,
    visible: false,
    loading: true,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORY_LIST:
            return {
                ...state,
                apiState: "loading",
            }

        case GET_CATEGORY_LIST_SUCCESS:
            console.log(action,"action in reducer")
            const listData = get(action,'payload.data')
            return {
                ...state,
                apiState: "success",
                loading: false,
                list: listData
            }

        case GET_CATEGORY_LIST_FAIL:
            return {
                ...state,
                apiState: "error",
            }

        default:
            return state
    }
}
