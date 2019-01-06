// this is a reusable button component

import React from 'react';
import { Button } from 'semantic-ui-react';

class CustomButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return(
            <Button
                className={this.props.class}
                icon={this.props.icon}
                content={this.props.label}
                labelPosition={this.props.labelPosition}
            />
        );
    }
}

export default CustomButton;