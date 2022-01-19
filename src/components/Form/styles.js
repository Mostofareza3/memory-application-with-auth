import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),

    },
  },
  paper: {
    padding: theme.spacing(2),
    position: "sticky",
    top: 70,
    backgroundImage: "radial-gradient( circle 328px at 2.9% 15%,  rgba(191,224,251,1) 0%, rgba(232,233,251,1) 25.8%, rgba(252,239,250,1) 50.8%, rgba(234,251,251,1) 77.6%, rgba(240,251,244,1) 100.7% )"

  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    // backgroundColor: 'black'
    // background: "rgb(2, 0, 36)",
    // background: "linear - gradient(90deg, rgba(2, 0, 36, 1) 0 %, rgba(182, 10, 173, 0.48503151260504207) 9 %, rgba(0, 212, 255, 1) 100 %)",
  },
  fileInput: {
    width: '97%',
    margin: '7px 0',
    backgroundColor: "white",
    borderRadius: "5px"
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));