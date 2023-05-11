/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import uniqid from 'uniqid';

class Education extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            education: [
                {
                    index: '0',
                    school: 'Fake University of Pretendland',
                    study: 'Computer Science and Engineering, B.S.',
                    startDate: '2000-01-01',
                    endDate: '2004-01-01',
                    id: uniqid(),
                },
            ],
            editMode: false,
        };
    }

    handleChangeSchool = (e) => {
        let index = e.target.parentNode.dataset.index;
        this.setState(prevState => {
            const newEducation = [...prevState.education];
            newEducation[index].school = e.target.value;
            return {education: newEducation};
        });
    };

    handleChangeStudy = (e) => {
        let index = e.target.parentNode.dataset.index;
        this.setState(prevState => {
            const newEducation = [...prevState.education];
            newEducation[index].study = e.target.value;
            return {education: newEducation};
        });
    };

    handleChangeStartDate = (e) => {
        let index = e.target.parentNode.dataset.index;
        this.setState(prevState => {
            const newEducation = [...prevState.education];
            newEducation[index].startDate = e.target.value;
            return {education: newEducation};
        });
    };

    handleChangeEndDate = (e) => {
        let index = e.target.parentNode.dataset.index;
        this.setState(prevState => {
            const newEducation = [...prevState.education];
            newEducation[index].endDate = e.target.value;
            return {education: newEducation};
        });
    };

    onClickSave = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            school: this.state.school,
            study: this.state.study,
            eduDate: this.state.eduDate,
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
        let index = this.state.education.length;
        this.setState(prevState => {
            const newEducation = [...prevState.education];
            newEducation[index] = {
                index: index,
                school: '',
                study: '',
                startDate: '',
                endDate: '',
                id: uniqid(),
            };
            return {education: newEducation};
        });
    }

    render() {
        const { education, editMode } = this.state;
        const { hideButtons } = this.props;
        const toggleButtonText = editMode ? 'Save' : 'Edit';
            return(
                <div className='edu'>
                    <div className='sectionHeader'>
                        <h2>Education</h2>
                        <button onClick={this.onClickAdd} className={hideButtons ? 'hidden' : undefined}>+</button>
                    </div>
                    {education.map(eduItem => {
                        return(
                            <form className='eduForm' data-index={eduItem.index} key={eduItem.id}>
                                { (editMode && !hideButtons) ? <>
                                    <label htmlFor='eduStudy'>Degree</label>
                                    <input id='eduStudy' type='text' value={eduItem.study} onChange={this.handleChangeStudy}/>
                                </> : <p id='eduStudy'>{eduItem.study}</p> 
                                }
                                { (editMode && !hideButtons) ? <>
                                    <label htmlFor='eduName'>School</label>
                                    <input id='eduName' type='text' value={eduItem.school} onChange={this.handleChangeSchool}/>
                                </> : <p id='eduName'>{eduItem.school}</p> 
                                }
                                { (editMode && !hideButtons) ? <>
                                    <label htmlFor='eduStartDate'>Start Date</label>
                                    <input id='eduStartDate' type='date' value={eduItem.startDate} onChange={this.handleChangeStartDate}/>
                                    <label htmlFor='eduEndDate'>End Date</label>
                                    <input id='eduEndDate' type='date' value={eduItem.endDate} onChange={this.handleChangeEndDate}/>
                                </> : <p id='eduDates'>{eduItem.startDate} - {eduItem.endDate}</p>
                                }
                            </form>
                        );
                    })}
                    <button type='submit' onClick={this.onClickSave} className={hideButtons ? 'hidden' : undefined}>{toggleButtonText}</button>
                </div>
            );
    }
}

export default Education;