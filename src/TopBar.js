import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotImplementedSnackbar from './Snackbar';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class ButtonAppBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            snackOpen: false
        }
    }

    openSnack(){
        this.setState({
            snackOpen: true
        });
        console.log("There");
    }

    handleSnackBarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ snackOpen: false });
    };

    render(){

        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.props.onMenuClick}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            {this.props.name}
                        </Typography>
                        <Button color="inherit" onClick={() => {this.openSnack()}}>Přihlásit se</Button>
                    </Toolbar>
                </AppBar>
                <NotImplementedSnackbar open={this.state.snackOpen} onClose={this.handleSnackBarClose}/>
            </div>
        );
    }
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
