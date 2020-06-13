import React from 'react';
import Tab from '@material-ui/core/Tab';
import history from "../history"

class LinkTab extends React.Component {
    render() {
        return (
            <Tab
                disableRipple={true}
                onClick={(event) => {
                    history.push(this.props.href, {tabIndex: this.props.tabIndex })
                }}
                {...this.props}
            />
        );
    }
}


export default LinkTab;
