import React from 'react';

import styles from '../css/login.css';

export default class Page2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLogin: false,
    };
    console.log('login', props);
  }

  handleInputTextChanged = (e, state) => {
    this.setState({
      [state]: e.target.value
    });
  }

  handleSubmit = async e => {
    e.preventDefault();
    console.log('handleSubmit');
    const formData = new FormData(e.target);
    console.log('formData', formData.get('username'), formData.get('password'));
    if (!this.state.username || !this.state.password) {
      alert('请输入用户名密码');
      return;
    }
    const res = await this.fetchLogin('POST', {
      username: this.state.username,
      password: this.state.password
    });
    if (res.status === 200) {
      if (res.code === 1) {
        this.setState({
          isLogin: true
        });

      } else if (res.code === 0) {
        alert('用户名密码错误');
      }
    } else {
      alert('网络不给力，请重试');
    }
  }

  renderLoginForm = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <input type='text' name='username' value={this.state.username} onChange={e => { this.handleInputTextChanged(e, 'username') }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input type='password' name='password' value={this.state.password} onChange={e => { this.handleInputTextChanged(e, 'password') }} />
        </div>
        <div>
          <input type='submit' value='登录' className='button-submit' />
        </div>
      </form>
    );
  }

  renderLoginedDiv = () => {
    return (
      <div>欢迎，{this.state.username}</div>
    );
  }

  render() {
    return (
      <div className='container'>
        <h1 className={styles.title}>login</h1>
        {this.state.isLogin ? this.renderLoginedDiv() : this.renderLoginForm()}
      </div>
    );
  }
}