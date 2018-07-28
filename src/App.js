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

const theme = createMuiTheme({
    palette: {
        primary: { main: '#2c3e50' }, // Purple and green play nicely together.
        secondary: { main: '#2980b9' }, // This is just green.A700 as hex.
    },
});

const styles = theme => ({
    formControl: {
        "margin-top": theme.spacing.unit * 6,

    }
});

class Day extends Component {
    render(){

        let className = "Day";
        if(!this.props.active) {
            className = className + " disabled";
        } else if (this.props.highlight) {
            className = className + " highlight";
        }

        return(
            <div className={className} style={{"--color": this.props.color}}>
                <span className="DayNumber"> {this.props.day.getDate()}</span>
                <span className="Shift">{this.props.sichta}</span>
            </div>
        );
    }
}

function getSichta(date, days, offset){

    let dayInWeek = Math.floor(date.getTime() / (1000 * 3600 * 24));
    dayInWeek = (dayInWeek + offset) % days;
    return dayInWeek;
}

function normalizeDate(date){
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
}

//let colors = ["#27ae60", "#2ecc71", "#e67e22", "#f39c12", "#2c3e50", "#34495e", "#2980b9", "#3498db"];

/*function daysInMonth (date) {
    return new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
}*/

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
                    {days}
                </div>

            </div>
        )
    }
}

const commonNames = {
    "3shift": {
        colors: ["#27ae60", "#27ae60", "#e67e22", "#e67e22", "#2c3e50", "#2c3e50", "#2980b9", "#2980b9"],
        names: ["R", "R", "O", "O", "N", "N", "-", "-"]
    },
    "3shift-all": {
        colors: ["#27ae60", "#27ae60", "#e67e22", "#e67e22", "#2c3e50", "#2c3e50", "#2980b9", "#2980b9"],
        names: ["ABC", "ABC", "DAB", "DAB", "CDA", "CDA", "BCD", "BCD"]
    }
};

const predefined = [
    { name: "Železárny A", days: 8, offset: 1, scheme: commonNames["3shift"] },
    { name: "Železárny B", days: 8, offset: 3, scheme: commonNames["3shift"] },
    { name: "Železárny C", days: 8, offset: 5, scheme: commonNames["3shift"] },
    { name: "Železárny D", days: 8, offset: 7, scheme: commonNames["3shift"] },
    { name: "Železárny souhrn (zatím nefunkční!)", days: 8, offset: 1, scheme: commonNames["3shift-all"] },
];


class App extends Component {

    state = {
        sichtaSelected: predefined[0]
    };

    handleSichtaSelected = event => {
        console.log(event);
        this.setState({
            sichtaSelected: event.target.value
        })
    };

    static generateShiftMenuItems() {
        let result = [];
        for(let i of predefined){
            result.push(<MenuItem value={i}>{i.name}</MenuItem>);
        }
        return result;
    }

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
                                {App.generateShiftMenuItems()}
                            </Select>
                        </FormControl>
                    </div>
                </MuiThemeProvider>
            </React.Fragment>
        );
    }
}




export default withStyles(styles)(App);
