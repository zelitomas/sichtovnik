import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Day from './Day';
import {getSichta, normalizeDate} from "./commonFunctions";
import { withStyles } from '@material-ui/core/styles';

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
    }

});

export default withStyles(style)(WelcomeDialog);