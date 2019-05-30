import {Component} from "react";
import React from "react";
import CzechHolidays from "./CzechHolidays.js";

class Day extends Component {
    render(){

        let className = "Day";
        if(!this.props.active) {
            className = className + " disabled";
        } else if (this.props.highlight) {
            className = className + " highlight";
        }

        if(CzechHolidays.isHoliday(this.props.day)){
            className = className + " holiday";
        }

        if(this.props.className){
            className = className + " " + this.props.className;
        }

        return(
            <div className={className} style={{"--color": this.props.color}}>
                <span className="DayNumber"> {this.props.day.getDate()}</span>
                <span className="Shift">{this.props.sichta}</span>
            </div>
        );
    }
}

export default Day;