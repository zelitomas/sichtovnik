import React, { Component } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import {VERSION} from "./globals.js";

import Typography from '@material-ui/core/Typography';

// This class should show relevant tips. Refactoring needed.

class Tip extends Component {

    render(){
        return (
            <div className="tip">
                <Typography component="p">
                    <strong>Tip:</strong> Šichtu změníte klepnutím na <MenuIcon />
                </Typography>
            </div>
        );
    }
}

export default Tip;