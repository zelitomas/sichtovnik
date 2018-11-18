import Drawer from '@material-ui/core/Drawer';
import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import predefined from "./defaults";

class AppDrawer extends Component{

    generateShiftListItems = () => {
        let result = [];
        console.log(this.props.savedShift === this.props.selectedShift);
        result.push(
            <ListItem button
                      selected={true}
                      onClick={() => this.handleSichtaSelected(this.props.savedShift)}>
                Moje šichta <em>({this.props.savedShift.name})</em>
            </ListItem>
        );
        for(let i of predefined){
            result.push(
                <ListItem button
                                  selected={i === this.props.selectedShift}
                                  onClick={() => this.handleSichtaSelected(i)}>
                    {i.name}
                </ListItem>
            );
        }
        return result;
    };

    handleSichtaSelected = event => {
        this.props.onShiftChange(event);
        this.props.onClose();
    };

    generateShiftList(){
        return (
            <List>
                {this.generateShiftListItems()}
            </List>
        )
    }

    render(){
        return (
            <Drawer open={this.props.open} onClose={this.props.onClose}>
                {this.generateShiftList()}
            </Drawer>
        );
    }
}

export default AppDrawer;