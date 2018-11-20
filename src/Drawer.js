import Drawer from '@material-ui/core/Drawer';
import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import DeleteIcon from '@material-ui/icons/Delete';
import predefined from "./defaults";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import UP from './UserPreferences';

class AppDrawer extends Component{

    generateShiftListItems = () => {
        let result = [];
        result.push(
            <ListItem button
                      selected={true}
                      onClick={() => this.handleSichtaSelected(this.props.savedShift)}>
                <ListItemText>Moje šichta <em>({this.props.savedShift.name})</em></ListItemText>
            </ListItem>
        );
        result.push(<Divider />);
        for(let i of predefined){
            result.push(
                <ListItem button
                                  selected={i === this.props.selectedShift}
                                  onClick={() => this.handleSichtaSelected(i)}>
                    <ListItemText>{i.name}</ListItemText>
                </ListItem>
            );
        }
        return result;
    };

    handleSichtaSelected = event => {
        this.props.onShiftChange(event);
        this.props.onClose();
    };

    // TODO: Refactor

    nukeAndRefresh() {
        UP.nuke();
        window.location.reload(true);
    }

    generateShiftList(){
        return (
            <List>
                {this.generateShiftListItems()}
                <Divider/>
                <ListItem button onClick={() => {this.nukeAndRefresh()}}>
                    <ListItemIcon><DeleteIcon/></ListItemIcon>
                    <ListItemText>Smazat veškerá nastavení</ListItemText>
                </ListItem>
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