/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Info from './Info';
import List from './List';

class Sidebar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { hideButtons } = this.props;
        return (
            <div className='sidebar'>
                <Info hideButtons={hideButtons}/>
                <List title='Skills' hideButtons={hideButtons}/>
                <List title='Languages' hideButtons={hideButtons}/>
                <List title='Interests' hideButtons={hideButtons}/>
            </div>
        );
    }
}

export default Sidebar;