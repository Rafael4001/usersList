import React, { Component } from 'react';


const USER_SERVICE_URL = 'https://jsonplaceholder.typicode.com/users';

class UserList extends Component {
  state = {
    users: [],
    isFetching: true,
    searchValue: '',
  };

  componentDidMount() {
    this.fetchUsersWithFetchAPI();
  }

  fetchUsersWithFetchAPI = () => {
    this.setState({isFetching: true});

    fetch(USER_SERVICE_URL)
      .then(response => response.json())
      .then(result => {
        this.setState({users: result, isFetching: false})
      })
      .catch(e => {
        console.log(e);
        this.setState({...this.state, isFetching: false});
      });
  };

  handleChange = (value) => {
    this.setState({searchValue: value})
  };

  getUsers = () => {
    const table = this.getFilteredResult();

    return (
      table.map((user, id) => (
        <li key={id} className={this.props.classes.liContainer}>
          <span className={this.props.classes.secondaryText}>{id + 1}. </span>
          <div>
            {user.name}
            <span className={this.props.classes.secondaryText}> @{user.username}</span>
          </div>
        </li>
      ))
    )
  };

  getFilteredResult = () => {
    let filteredUsers = [];

    this.state.users.map(user => {
      const userName = user.name.toUpperCase();

      if(userName.includes(this.state.searchValue)) {
        filteredUsers.push(user)
      }
    });

    return filteredUsers
  };


  render() {
    const {classes} = this.props;

    return (
      <div className={classes.wrapperContainer}>
        <div className={classes.searchContainer}>
          <div className={classes.titleText}>Users list</div>
          <input
            className={classes.inputContainer}
            type={'text'}
            onChange={event => this.handleChange(event.target.value.toUpperCase())}
            placeholder={'Search by user name...'}
          />
          <div className={classes.searchResultContainer}>
            <ul className={classes.ul}>
              {this.state.isFetching ? 'is loading...' : this.getUsers()}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default UserList;
