/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import uniqid from 'uniqid';

class List extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    text:'A', 
                    id:uniqid(), 
                    index:0,
                },
                {
                    text:'B', 
                    id:uniqid(), 
                    index: 1,
                },
                {
                    text:'C', 
                    id:uniqid(), 
                    index: 2,
                }
            ],
            editMode: false,
        }
    }

    handleChangeItem = (e) => {
        let index = e.target.dataset.index;
        this.setState(prevState => {
            const newItems = [...prevState.items];
            newItems[index].text = e.target.value;
            return {items: newItems};
        });
    };

    onAddItem = (e) => {
        e.preventDefault();
        let index = this.state.items.length;
        this.setState(prevState => {
            const newItems = [...prevState.items];
            newItems[index] = {
                index: index,
                text: '',
                id: uniqid(),
            };
            return {items: newItems};
        });
    }

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
        const { items, editMode } = this.state;
        const { hideButtons, title } = this.props;
        const toggleButtonText = editMode ? 'Save' : 'Edit';
        return (
            <div className='list'>
                <h3>{title}</h3>
                <ul>
                    {items.map(item => {
                        return <>
                            { (editMode && !hideButtons) ? <input type='text' value={item.text} data-index={item.index} onChange={this.handleChangeItem} key={item.id}/> : <li key={item.id}>{item.text}</li> }
                        </>;
                    })}
                </ul>
                { (editMode && !hideButtons) && <button onClick={this.onAddItem} className={hideButtons ? 'hidden' : undefined}>+</button> }
                <button type='submit' onClick={this.onClickSave} className={hideButtons ? 'hidden' : undefined}>{toggleButtonText}</button>
            </div>
        );
    }
}

export default List;