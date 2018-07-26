import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

class NotImplementedYetSnackbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: props.open,
        };
    }


    render() {
        return (
            <div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.props.open}
                    autoHideDuration={6000}
                    onClose={this.props.onClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span>Díky za váš zájem, ale tahle funkce ještě není hotová.</span>}
                />
            </div>
        );
    }
}

export default NotImplementedYetSnackbar;
