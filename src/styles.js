import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '0px 0px 50px 0px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: 'white',
    position: "-webkit-sticky",
    position: "sticky",
    top: 0
  },
  heading: {
    color: 'lightblue',
    // fontSize:"10px",
    // textTransform: 'uppercase'
  },
  image: {
    marginLeft: '25px',
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: "column-reverse"
    }
  }
}));