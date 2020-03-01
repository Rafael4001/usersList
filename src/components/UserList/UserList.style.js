import { withStyles } from '@material-ui/core/styles';

import UserList from './UserList'

const styles = () => ({
  wrapperContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '1.25rem',
    width: '30rem',
    textAlign: 'center'
  },
  titleText: {
    fontSize: '2rem',
    marginBottom: '3rem',
  },
  inputContainer: {
    fontSize: '1.25rem',
    marginBottom: '1rem',
  },
  searchResultContainer: {
    textAlign: 'left',
  },
  secondaryText: {
    color: '#b3b3b3',
  },
  ul: {
    padding: 0,
    listStyleType: 'none',
  },
  liContainer: {
    display: 'grid',
    gridTemplateColumns: '3rem auto',
    margin: '0.5rem 0',
  }
});

export default withStyles(styles)(UserList)
