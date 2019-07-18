import React, { Component } from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { teamInformation } from '../actions';
import Header from './header';
import Body from './body';

class App extends Component {
    componentDidMount() {
        this.props.teamInformation();
    }

    render() {
        const { team_info } = this.props.info;
        return (
            <div>
                {
                    team_info === undefined
                        ?
                        <CircularProgress />
                        :
                        <>
                            <Header
                                team_info={team_info}
                            />
                            <Body
                                team_info={team_info}
                            />
                        </>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        info: state.info
    };
};

export default connect(mapStateToProps, { teamInformation })(App);