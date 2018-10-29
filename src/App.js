import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import TopBar from './TopBar';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import Day from './Day';
import UP from './UserPreferences';
import WelcomeDialog from './WelcomeDialog';

import {getSichta, normalizeDate} from "./commonFunctions";
import predefined from "./defaults.js";

const theme = createMuiTheme({
    palette: {
        primary: { main: '#2c3e50' },
        secondary: { main: '#2980b9' },
    },
});

const styles = theme => ({
    formControl: {
        "margin-top": theme.spacing.unit * 6,

    }
});

const dayNames = ["Po", "Út", "St", "Čt", "Pá", "So", "Ne"];

class Calendar extends Component{

    nextMonth(){
        this.addMonths(1);
    }

    prevMonth(){
        this.addMonths(-1);
    }

    addMonths(month){
        let date = new Date(this.state.date.getTime());
        date.setMonth(this.state.date.getMonth() + month);
        this.setState({date: date});
    }

    constructor(props){
        super(props);
        let date = normalizeDate(new Date());
        date.setDate(1);
        this.state = {
            date: date
        }
    }

    render(){
        let days = [];
        let date = new Date(this.state.date.getTime());
        let day = date.getDay();
        let today = new Date();

        date.setDate((-12 - day) % 7);
        let dayNameList = dayNames.map((val) =>{
            return (<div className="dayName">{val}</div>);
        });
        for(let i = 0; i < 7*6; i++){
            let sichta = getSichta(date, this.props.days, this.props.offset);
            let active = date.getMonth() === this.state.date.getMonth();
            let isToday = today.getMonth() === date.getMonth() && date.getDate() === today.getDate() && today.getFullYear() === date.getFullYear();
            days.push(<Day day={new Date(date.getTime())}
                           sichta={this.props.scheme.names[sichta]}
                           color={this.props.scheme.colors[sichta]}
                           active={active}
                           highlight={isToday}
                      />);
            date.setTime(date.getTime() + 1000 * 3600 * 24);
        }


        return (
            <div className="Calendar">
                <p>
                    <div className="button">
                        <Button className={this.props.button} color="primary" onClick={() => {this.prevMonth()}}>Předchozí</Button>
                    </div>

                    <span className="month">{this.state.date.getMonth() + 1}</span> / {this.state.date.getFullYear()}

                    <div className="button">
                        <Button className={this.props.button} color="primary" onClick={() => {this.nextMonth() }}>Následující</Button>
                    </div>
                </p>
                <div className="MonthCalendar">
                    {dayNameList}
                    {days}
                </div>

            </div>
        )
    }
}


class App extends Component {

    constructor(props){
        super(props);
        let savedShift = UP.getValue("savedShift", null);
        let firstRun = false;
        if(savedShift === null){
            firstRun = true;
            savedShift = predefined[0];
        }

        this.state = {
            firstRun: firstRun,
            sichtaSelected: savedShift,
            savedShift: savedShift
        };
    }

    handleSichtaSelected = event => {
        this.setState({
            sichtaSelected: event.target.value
        })


    };

    generateShiftMenuItems = () => {
        let result = [];
        result.push(<MenuItem value={this.state.savedShift}>Moje šichta <em>({this.state.savedShift.name})</em></MenuItem>);
        for(let i of predefined){
            result.push(<MenuItem value={i}>{i.name}</MenuItem>);
        }
        return result;
    };

    handleWelcomeDialogClose = value => {
        if(!value){ return; }
        this.setState({
            sichtaSelected: value
        });
        UP.setValue("savedShift", value);
        this.setState({firstRun: false, sichtaSelected: value, savedShift: value});

    };

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <MuiThemeProvider theme={theme}>
                    <TopBar name="Šichtovník"/>
                    <div className="App">
                        <Calendar
                            days={this.state.sichtaSelected.days}
                            offset={this.state.sichtaSelected.offset}
                            scheme={this.state.sichtaSelected.scheme}
                        />

                        <WelcomeDialog shifts={predefined} open={this.state.firstRun} onClose={this.handleWelcomeDialogClose}/>

                        <FormControl fullWidth={true} className={this.props.classes.formControl}>
                            <InputLabel htmlFor="sichtaSelect">Zobrazit směnu</InputLabel>
                            <Select
                                value={this.state.sichtaSelected}
                                onChange={this.handleSichtaSelected}
                                inputProps={{
                                    id: 'sichtaSelect',
                                }}
                                className="Select"
                            >
                                {this.generateShiftMenuItems()}
                            </Select>
                        </FormControl>
                    </div>
                </MuiThemeProvider>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(App);
