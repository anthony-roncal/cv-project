/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class Info extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: 'John Doe',
            email: 'john@doe.com',
            phone: '(555)555-1234',
            editMode: false,
        };
    }

    handleChangeName = (e) => {
        this.setState({
            name: e.target.value
        });
    };

    handleChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    };

    handleChangePhone = (e) => {
        this.setState({
            phone: e.target.value
        });
    };

    onClickSave = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            editMode: !prevState.editMode,
        }));
    };

    onClickEdit = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            editMode: !prevState.editMode,
        }));
    }

    render() {
        const { name, email, phone, editMode } = this.state;
        const { hideButtons } = this.props;
        const toggleButtonText = editMode ? 'Save' : 'Edit';
            return(
                <div className='info'>
                    <h3>Contact</h3>
                    <form className='infoForm'>
                        <label htmlFor='infoName'>Name</label>
                        { (editMode && !hideButtons) ? <input id='infoName' type='text' value={name} onChange={this.handleChangeName}/> : <p id='infoName'>{name}</p> }
                        <label htmlFor='infoEmail'>Email</label>
                        { (editMode && !hideButtons) ? <input id='infoEmail' type='email' value={email} onChange={this.handleChangeEmail}/> : <p id='infoEmail'>{email}</p> }
                        <label htmlFor='infoPhone'>Phone</label>
                        { (editMode && !hideButtons) ? <input id='infoPhone' type='tel' value={phone} onChange={this.handleChangePhone}/> : <p id='infoPhone'>{phone}</p> }
                        <button type='submit' onClick={this.onClickSave} className={hideButtons ? 'hidden' : undefined}>{toggleButtonText}</button>
                    </form>
                </div>
            );
    }
}

export default Info;