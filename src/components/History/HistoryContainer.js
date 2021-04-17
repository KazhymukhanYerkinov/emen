import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';

import { getHistoryListThunk, setHistoryCurrentPage } from '../../redux/history-reducer';
import Preloader from '../common/Preloader/Preloader';

import History from './History';


class HistoryContainer extends React.Component {
  componentDidMount() {
    this.props.getHistoryListThunk(this.props.currentPage, this.props.pagesCount);
  }
  render() {
    if (!this.props.historyList) {
      return <Preloader />
    }
    return (
      <History
        
        BASE_URL = { this.props.BASE_URL }
        total_count = { this.props.totalCount } 
        history_list = { this.props.historyList }
        pages_count = { this.props.pagesCount }
        current_page = { this.props.currentPage }

        setCurrentPage = { this.props.setHistoryCurrentPage }
        getHistoryListThunk = { this.props.getHistoryListThunk }
      />
    )
  }
}

let mapStateToProps = (state) => ({
  historyList: state.historyPage.historyList,
  totalCount: state.historyPage.totalCount,
  pagesCount: state.historyPage.pagesCount,
  currentPage: state.historyPage.currentPage,
})


export default compose(
  connect(mapStateToProps, { getHistoryListThunk, setHistoryCurrentPage }),
  WithAuthRedirect,
)(HistoryContainer);
