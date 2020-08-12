import React, { Component } from 'react';
import './myProfile.less';

class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gender: 'male',
      description: '',
      agree: false,
    };
  }

  handleNameChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleDescriptionChange = event => {
    this.setState({
      description: event.target.value
    })
  }

  handleSeleteGender = event => {
    this.setState({
      gender: event.target.value
    })
  }

  handleAgreeChange = event => {
    this.setState({
      agree: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state.name, this.state.gender)
    console.log(this.state.description, this.state.agree)
  }

  render() {
    return (
      <form className="form">
        <label><h1>My Profile</h1></label>
        <div>
          <p>Name</p>
          <input
            type='text'
            placeholder='Your name'
            id='name'
            onChange={this.handleNameChange}
          >
          </input>
        </div>
        <div>
          <p>Gender</p>
          <select id='gender' onChange={this.handleSeleteGender}>
            <option value='male'>male</option>
            <option value='femal'>female</option>
          </select>
        </div>
        <div>
          <p>Description</p>
          <input
            type='text'
            placeholder='Description about yourself'
            id='desc'
            onChange={this.handleDescriptionChange}
          >
        </input>
        </div>
        <div>
          <label>
          <input
            type='checkbox'
            id='agree'
            value={true}
            onChange={this.handleAgreeChange}
          >
          </input>
          I have read the terms of conduct
          </label>
        </div>
        <div>
          <button
            type='submit'
            id='submit'
            disabled={!this.state.name || !this.state.gender || !this.state.description || !this.state.agree}
            onClick={this.handleSubmit}
          >Submit</button>
        </div>
      </form>
    );
  }
}

export default MyProfile;


