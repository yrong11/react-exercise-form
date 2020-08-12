import React, { Component } from 'react';
import './myProfile.less';
import 'bootstrap/dist/css/bootstrap.css'

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
        <div className="name">
          <div className='title'> <p>Name</p></div>
          <input
            className="input-name"
            size="15"
            type='text'
            placeholder='Your name'
            onChange={this.handleNameChange}
          >
          </input>
        </div>
        <div className="gender">
          <div className='title'> <p>Gender</p></div>
          <select className='selete-gender' onChange={this.handleSeleteGender}>
            <option value='male'>male</option>
            <option value='femal'>female</option>
          </select>
        </div>
        <div className="desc">
          <div className='title'> <p>Description</p></div>
          <input
            type='text'
            placeholder='Description about yourself'
            className='input-desc'
            onChange={this.handleDescriptionChange}
          >
          </input>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={true} 
            onChange={this.handleAgreeChange}
            id="defaultCheck1"></input>
          <label className="form-check-label" htmlFor="defaultCheck1">
            I have read the terms of conduct
          </label>
        </div>
        <div className="submit">
          <button
            className="btn btn-primary"
            style={{ width: '180px' }}
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


