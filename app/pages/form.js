import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const API_TEST = 'http://localhost:3001/test';
const API_SUBMIT_FORM = 'http://localhost:3001/api/submitForm';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    console.log('constructor', props)
  }
  componentWillMount() {
    console.log('componentWillMount')
    fetch(API_TEST, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(res => res.json()).then(res => {
      console.log('TEST GET', res);
    }).catch(e => {
      console.log('TEST GET ERROR', e);
    });
  }
  handleUsernameChange = e => {
    this.setState({
      username: e.target.value
    });
    console.log('handleUsernameChange', e.target);
  }
  handlePasswordChange = e => {
    this.setState({
      password: e.target.value
    })
    console.log('handlePasswordChange', e.target);
  }
  handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    console.log('e', e, e.nativeEvent)
    const formData = new FormData(e.target);
    console.log('handleSubmit', formData.get('username'), formData.getAll('gender'), formData.get('city'), formData.getAll('hobby'));
    fetch(API_SUBMIT_FORM, {
      method: 'POST',
      headers: new Headers({
        // 'Accept': 'application/json,text/plain,*/*',
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/json;charset=utf-8',
      }),
      credentials: 'include',
      // mode: 'cors',
      // body: formData,
      body: JSON.stringify({a:1,b:2}),
    }).then(res => res.json()).then(res => {
      console.log('POST', res);
      if (res && res.status === 200) {
        this.props.history.push('/');
      }
    }).catch(e => {
      console.log('POST ERROR', e);
    });
  }
  render() {
    return (
      <div onClick={() => { console.log('form div') }}>
        <form target='hidden_frame' onSubmit={this.handleSubmit}>
          用户名
          <input type='text' name='username' value={this.state.username} onChange={this.handleUsernameChange} />
          <br />
          密码
          <input type='password' name='password' value={this.state.password} onChange={this.handlePasswordChange} />
          <br />
          性别
          <label><input type='radio' name='gender' value='男' defaultChecked /> 男</label>
          <label><input type='radio' name='gender' value='女' /> 女</label>
          <br />
          城市
          <select name='city'>
            <option value='北京'>北京</option>
            <option value='上海'>上海</option>
            <option value='深圳'>深圳</option>
            <option value='杭州'>杭州</option>
          </select>
          <br />
          爱好
          <label onClick={e => { e.stopPropagation(); }}><input type='checkbox' name='hobby' value='运动' /> 运动</label>
          <label onClick={e => { e.stopPropagation(); }}><input type='checkbox' name='hobby' value='游戏' /> 游戏</label>
          <label onClick={e => { e.stopPropagation(); }}><input type='checkbox' name='hobby' value='电影' /> 电影</label>
          <br />
          <input type='submit' value='提交input' onClick={e => { e.stopPropagation(); }} />
          <input type='hidden' value='' />
        </form>
        <iframe name='hidden_frame' id="hidden_frame" style={{ display: 'none' }}></iframe>
      </div>
    );
  }
}