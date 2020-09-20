import axios from "axios"
import 'babel-polyfill'
import config from '../config'
import { FETCH_SPACECRAFT_SUCCESS, FETCH_SPACECRAFT, FETCH_SPACECRAFT_FAILURE } from "./action-types";

export default (launchYear = '', isSuccessfulLaunch = '', isSuccessfulLanding = '') => async (dispatch) => {
  dispatch({
    type: FETCH_SPACECRAFT,
  })
  const flightParams = {
    launchYear,
    isSuccessfulLaunch,
    isSuccessfulLanding
  }
  const launchParam = {
    launchYear: 'launch_year',
    isSuccessfulLaunch: 'launch_success',
    isSuccessfulLanding: 'land_success'
  }
  let spaceUrl = `${config.launchURL}`
  let modifiedUrl = spaceUrl
  Object.keys(launchParam).forEach((param => {
    if (flightParams[param]) {
      modifiedUrl = modifiedUrl.concat(`&${launchParam[param]}=${flightParams[param].toString()}`)
    }
  }))
  try {
    const res = await axios.get(modifiedUrl)
    dispatch({
      type: FETCH_SPACECRAFT_SUCCESS,
      payload: res.data || [],
    })
  } catch {
    dispatch({
      type: FETCH_SPACECRAFT_FAILURE,
    })
  }
};