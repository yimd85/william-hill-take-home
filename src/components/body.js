import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    }
}));

const Body = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    return (
        <Card style={{ marginTop: '10px' }}>
            <CardHeader
                avatar={
                    <Avatar aria-label="Recipe" style={{ backgroundColor: 'midnightblue' }}>
                        G
                    </Avatar>
                }
                title={props.team_info.strTeam}
                subheader={`Founded: ${props.team_info.intFormedYear}`}
            />
            <CardMedia
                style={{ paddingTop: '35%' }}
                image={props.team_info.strTeamFanart3}
                title="G-Men"
            />
            <CardActions>
                <IconButton>
                    <FavoriteIcon />
                </IconButton>
                <IconButton >
                    <ShareIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded}>
                <CardContent>
                    <Typography paragraph>
                        {props.team_info.strDescriptionEN}
                    </Typography>
                    <Typography paragraph>Manager: {props.team_info.strManager}</Typography>
                    <Typography paragraph>Location: {props.team_info.strStadiumLocation}</Typography>
                    <Typography paragraph>Stadium Capacity: {props.team_info.intStadiumCapacity}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default Body;