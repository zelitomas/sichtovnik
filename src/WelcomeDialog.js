import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Day from './Day';
import {getSichta, normalizeDate} from "./commonFunctions";
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import wavingHandImg from './img/wavingHand.svg';

import React, { Component } from 'react';

class WelcomeDialog extends Component {
    state = {
        selected: this.props.selected
    };

    handleClose = () => {
        this.props.onClose(this.state.selected);
    };

    handleListItemClick = (value) => {
        this.setState({selected: value});
        this.props.onClose(value);
    };

    render() {
        let today = normalizeDate(new Date());
        return (
            <Dialog onClose={this.handleClose} open={this.props.open}>
                <div className={this.props.classes.welcomeDialog}>
                    <Typography className={this.props.classes.welcomeHeading} variant="display2" gutterBottom>
                        Ahoj!
                    </Typography>
                    <img src={wavingHandImg} className="bigImage" alt=""/>
                    <p>Na které šichtě děláš?</p>
                </div>
                <List>
                    {this.props.shifts.map(value => {
                        let sichta = getSichta(today, value.days, value.offset);
                        return (
                            <ListItem button onClick={() => this.handleListItemClick(value)}>
                                <Day active={true} day={today} highlight={false} sichta={value.scheme.names[sichta]} color={value.scheme.colors[sichta]} className={this.props.classes.day}/>
                                <span className={this.props.classes.sichta}>{value.name}</span>
                            </ListItem>
                        )
                    })}
                </List>
            </Dialog>
        )


    }
}

const style = theme => ({
    sichta: {
        margin: theme.spacing.unit * 2
    },
    day: {
        "min-width": "4em"
    },
    welcomeDialog: {
        "text-align": "center"
    },
    welcomeHeading: {
        "margin-top": theme.spacing.unit * 2
    }

});

export default withStyles(style)(WelcomeDialog);