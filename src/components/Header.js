/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class Header extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: 'John Doe',
            title: 'Software Developer',
            editMode: false,
        }
    }

    handleChangeName = (e) => {
        this.setState({
            name: e.target.value
        });
    };

    handleChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        });
    };

    onClickSave = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            name: this.state.name,
            title: this.state.title,
            editMode: !prevState.editMode,
        }));
    };

    render() {
        const { name, title, editMode } = this.state;
        const { hideButtons } = this.props;
        const toggleButtonText = editMode ? 'Save' : 'Edit';
        return (
            <div className='header'>
                { (editMode && !hideButtons) ? <input id='headerName' type='text' value={name} onChange={this.handleChangeName}/> : <h1>{name}</h1> }
                { (editMode && !hideButtons) ? <input id='headerTitle' type='text' value={title} onChange={this.handleChangeTitle}/> : <h3>{title}</h3> }
                <button type='submit' onClick={this.onClickSave} className={hideButtons ? 'hidden' : undefined}>{toggleButtonText}</button>
            </div>
        );
    }

}

export default Header;