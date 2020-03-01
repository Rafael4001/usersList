import React, { useState, useEffect } from 'react';


const USER_SERVICE_URL = 'https://jsonplaceholder.typicode.com/users';

const UserListHook = (props) => {
  const {classes} = props;

  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [searchValue, setSearchValue] = useState('');


  useEffect(() => {
    setIsFetching(true);

    async function fetchData() {
      const res = await fetch(USER_SERVICE_URL);
      res
        .json()
        .then(res => setUsers(res))
        .catch(err => console.log(err))
    }

    fetchData();
    setIsFetching(false)
  }, [isFetching]);

  const getFilteredResult = () => {
    let filteredUsers = [];

    users.map(user => {
      const userName = user.name.toUpperCase();

      if(userName.includes(searchValue)) {
        filteredUsers.push(user)
      }
    });

    return filteredUsers
  };


  const getUsers = () => {
    const table = getFilteredResult();

    if(table.length) {

      return (
        table.map((user, id) => (
          <li key={id} className={classes.liContainer}>
            <span className={classes.secondaryText}>{id + 1}. </span>
            <div>
              {user.name}
              <span className={classes.secondaryText}> @{user.username}</span>
            </div>
          </li>
        ))
      )
    } else {
      return 'brak pasujących wyników'
    }
  };

  const handleChange = (value) => {
    setSearchValue(value)
  };

  return (
    <div className={classes.wrapperContainer}>
      <div className={classes.searchContainer}>
        <div className={classes.titleText}>Users list</div>
        <input
          className={classes.inputContainer}
          type={'text'}
          onChange={event => handleChange(event.target.value.toUpperCase())}
          placeholder={'Search by user name...'}
        />
        <div className={classes.searchResultContainer}>
          <ul className={classes.ul}>
            {isFetching ? 'is loading...' : getUsers()}
          </ul>
        </div>
      </div>
    </div>
  )
};

export default UserListHook;
