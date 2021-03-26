import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { getHistoryAnalysThunk, failHistoryAnalys } from '../../redux/history-reducer';
import Preloader from '../common/Preloader/Preloader';

import HistoryDetail from './HistoryDetail';




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


let withUrlDataHistoryDetail = withRouter(HistoryDetailContainer)
export default connect(mapStateToProps, { getHistoryAnalysThunk, failHistoryAnalys })(withUrlDataHistoryDetail);