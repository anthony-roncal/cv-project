/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import uniqid from 'uniqid';

class Experience extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            experiences: [
                {
                    index: '0',
                    company: 'Mango',
                    title: 'Jeenyis',
                    tasks: '- Sell Mango products\n- Able to answer all Mango-related questions\n- Try to convert Bambung users',
                    startDate: '2000-01-02',
                    endDate: '2020-01-02',
                    id: uniqid(),
                },
                {
                    index: '0',
                    company: 'Mango',
                    title: 'Jeenyis',
                    tasks: '- Sell Mango products\n- Able to answer all Mango-related questions\n- Try to convert Bambung users',
                    startDate: '2000-01-02',
                    endDate: '2020-01-02',
                    id: uniqid(),
                },
            ],
            editMode: false,
        };
    }

    handleChangeCompany = (e) => {
        let index = e.target.parentNode.dataset.index;
        this.setState(prevState => {
            const newExperiences = [...prevState.experiences];
            newExperiences[index].company = e.target.value;
            return {experiences: newExperiences};
        });
    };

    handleChangeTitle = (e) => {
        let index = e.target.parentNode.dataset.index;
        this.setState(prevState => {
            const newExperiences = [...prevState.experiences];
            newExperiences[index].title = e.target.value;
            return {experiences: newExperiences};
        });
    };

    handleChangeTasks = (e) => {
        let index = e.target.parentNode.dataset.index;
        this.setState(prevState => {
            const newExperiences = [...prevState.experiences];
            newExperiences[index].tasks = e.target.value;
            return {experiences: newExperiences};
        });
    };

    handleChangeStartDate = (e) => {
        let index = e.target.parentNode.dataset.index;
        this.setState(prevState => {
            const newExperiences = [...prevState.experiences];
            newExperiences[index].startDate = e.target.value;
            return {experiences: newExperiences};
        });
    };

    handleChangeEndDate = (e) => {
        let index = e.target.parentNode.dataset.index;
        this.setState(prevState => {
            const newExperiences = [...prevState.experiences];
            newExperiences[index].endDate = e.target.value;
            return {experiences: newExperiences};
        });
    };

    onClickSave = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            company: this.state.company,
            title: this.state.title,
            tasks: this.state.tasks,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            editMode: !prevState.editMode,
        }));
    };

    onClickEdit = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            editMode: !prevState.editMode,
        }));
    }

    onClickAdd = (e) => {
        e.preventDefault();
        let index = this.state.experiences.length;
        this.setState(prevState => {
            const newExperiences = [...prevState.experiences];
            newExperiences[index] = {
                index: index,
                company: '',
                title: '',
                tasks: '',
                startDate: '',
                endDate: '',
                id: uniqid(),
            };
            return {experiences: newExperiences};
        });
    }

    render() {
        const { experiences, editMode } = this.state;
        const { hideButtons } = this.props;
        const toggleButtonText = editMode ? 'Save' : 'Edit';
            return(
                <div className='exp'>
                    <div className='sectionHeader'>
                        <h2>Experience</h2>
                        <button onClick={this.onClickAdd} className={hideButtons ? 'hidden' : undefined}>+</button>
                    </div>
                    {experiences.map(experience => {
                        return(
                            <form className='expForm' data-index={experience.index} key={experience.id}>
                                { (editMode && !hideButtons) ? <>
                                    <label htmlFor='expTitle'>Title</label>
                                    <input id='expTitle' type='text' value={experience.title} onChange={this.handleChangeTitle}/>
                                </> : <p id='expTitle'>{experience.title}</p> 
                                }
                                { (editMode && !hideButtons) ? <>
                                    <label htmlFor='expCompany'>Company</label>
                                    <input id='expCompany' type='text' value={experience.company} onChange={this.handleChangeCompany}/>
                                </> : <p id='expCompany'>{experience.company}</p> 
                                }
                                { (editMode && !hideButtons) ? <>
                                    <label htmlFor='expTasks'>Tasks</label>
                                    <textarea value={experience.tasks} onChange={this.handleChangeTasks}/>
                                </> : <div className='multiline'>{experience.tasks}</div>
                                }
                                { (editMode && !hideButtons) ? <>
                                    <label htmlFor='expStartDate'>Start Date</label>
                                    <input id='expStartDate' type='date' value={experience.startDate} onChange={this.handleChangeStartDate}/>
                                    <label htmlFor='expEndDate'>End Date</label>
                                    <input id='expEndDate' type='date' value={experience.endDate} onChange={this.handleChangeEndDate}/>
                                </> : <p id='expDates'>{experience.startDate} - {experience.endDate}</p>
                                }
                            </form>
                        );
                    })}
                    <button type='submit' onClick={this.onClickSave} className={hideButtons ? 'hidden' : undefined}>{toggleButtonText}</button>
                </div>
            );
    }
}

export default Experience;