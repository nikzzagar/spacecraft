import { connect } from 'react-redux';
import fetchcards from '../../actions'
import view from './view'

function loadData (store) {
    return store.dispatch(fetchcards());
}

function mapStateToProps(state) {
    return {
        spaceData: state.spaceData.data,
        fetchingData: state.spaceData.isFetching
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSpacecards: (launchYear, isSuccessfulLaunch, isSuccessfulLanding) => {
            dispatch(fetchcards(launchYear, isSuccessfulLaunch, isSuccessfulLanding))
        }
    }
}
const exportComponent = connect(mapStateToProps, mapDispatchToProps)(view)

export default {
    component: exportComponent,
    loadData
  }
