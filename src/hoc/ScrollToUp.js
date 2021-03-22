import React from 'react';
import { withRouter } from 'react-router';



class ScrollToTop extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scroll(0, 0);
        }
    }
    render() {
        return this.props.children
    }
}

export default withRouter(ScrollToTop);