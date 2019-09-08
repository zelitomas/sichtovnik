import React, { Component } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import {GitHubIcon} from "./img/icons/Icons.js";
import ExternalLink from "./ExternalLink.js";

import Typography from '@material-ui/core/Typography';

// This class should show relevant tips. Refactoring needed.

const tips = [
    {
        tip: (
            <div className="tip">
                <Typography component="p">
                    <strong>Tip:</strong> Šichtu změníte klepnutím na <MenuIcon />
                </Typography>
            </div>
        )
    },
    {
        tip: (
            <div className="tip">
                <Typography component="p">
                    <strong>Tip:</strong> Programuješ? Máš nápad na novou funkci? <ExternalLink href="https://github.com/zelitomas/sichtovnik">Pull requesty vítány!</ExternalLink> {GitHubIcon}
                </Typography>
            </div>
        )
    }
];

class Tip extends Component {

    getRandomTip = () => {
        let tipNumber = Math.floor(Math.random() * tips.length);
        return tips[tipNumber].tip;
    };

    render(){
        return (
            <div className="tip">
                {this.getRandomTip()}
            </div>
        );
    }
}

export default Tip;