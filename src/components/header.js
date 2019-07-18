import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const Header = (props) => {
    const social_media = [
        { name: 'Facebook', props: props.team_info.strFacebook },
        { name: 'Youtube', props: props.team_info.strYoutube },
        { name: 'Instagram', props: props.team_info.strInstagram },
        { name: 'Twitter', props: props.team_info.strTwitter }
    ];
    return (
        <div style={{ flexGrow: "1" }}>
            <AppBar position="static" color="default">
                <Toolbar style={{ direction: 'flex', justifyContent: 'space-between', }}>
                    <img
                        src={props.team_info.strTeamBadge}
                        alt='loading'
                        height="42" width="42"
                    />
                    <div>
                        {social_media.map((value, i) => (
                            <React.Fragment key={i} >
                                <Button color="inherit">
                                    <a style={{ color: 'black' }} href={`https://${value.props}`} target='_blank' rel="noopener noreferrer">
                                        {value.name}
                                    </a>
                                </Button>
                                /
                            </React.Fragment >
                        ))}
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;