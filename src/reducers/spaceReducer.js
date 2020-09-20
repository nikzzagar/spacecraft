  
import { FETCH_SPACECRAFT_SUCCESS, FETCH_SPACECRAFT, FETCH_SPACECRAFT_FAILURE } from "../actions/action-types"

export default (state = {
  data: [],
  isFetching: false
}, action) => {
  switch (action.type) {
    case FETCH_SPACECRAFT:
      return {
        data: [],
        isFetching: true
      }
    case FETCH_SPACECRAFT_SUCCESS:
      return {
        data: action.payload,
        isFetching: false
      }
    case FETCH_SPACECRAFT_FAILURE:
      return {
        data: [],
        isFetching: false
      }
    default:
      return state
  }
};