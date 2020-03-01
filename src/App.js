import React, { Component } from 'react';
// import UserList from "./components/UserList";
import UserListHook from "./components/UserListHook";


class App extends Component {

  render() {
    return (
      <div>
        {/*built on class component*/}
        {/*<UserList/>*/}

        {/*built od HOOK*/}
        <UserListHook/>
      </div>
    )
  }
}

export default App;
