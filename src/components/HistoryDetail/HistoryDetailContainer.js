import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';


import HistoryDetail from './HistoryDetail';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import Preloader from '../common/Preloader/Preloader';
import { getHistoryAnalysThunk, failHistoryAnalys } from '../../redux/history-reducer';







class HistoryDetailContainer extends React.Component {
    componentDidMount() {
        let historyUID = this.props.match.params.historyUID;
        this.props.getHistoryAnalysThunk(historyUID)
    }

    componentWillUnmount() {
        this.props.failHistoryAnalys();
    }

    render(){
        if (!this.props.historyDetail)
            return <Preloader />
        
        return <HistoryDetail 
            history = { this.props.historyDetail } 
            BASE_URL = { this.props.BASE_URL }
        />
    }
}

let mapStateToProps = (state) => ({
    historyDetail: state.historyPage.historyDetail
})



export default compose( 
    connect(mapStateToProps, { getHistoryAnalysThunk, failHistoryAnalys }),
    withRouter,
    WithAuthRedirect,
)(HistoryDetailContainer);

