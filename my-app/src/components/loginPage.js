import React from "react";
import { withRouter } from 'react-router-dom';
import { setAutherisationStatus } from '../redux/authentication/authenticationAction';
import { connect } from 'react-redux';

import {
    Button,
    TextField,
    Grid,
    Paper,
    AppBar,
    Typography,
    Toolbar,
} from "@material-ui/core";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



 
 function loginPage() {
   return (
     <div>loginPage</div>
   )
 }
 
 export default loginPage
// class LoginPage extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { username: "", password: "", authflag: 0 };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({ username: event.state.username, password: event.state.password });
//     }

//     handleSubmit(event) {
//         event.preventDefault();
//         if (this.state.username == 'admin@gmail.com' && this.state.password == 'Abcd@1234') {
//             this.setState({ authflag: 1 });
//             this.props.setAutherisationStatus(true)
//             const { history } = this.props;
//             history.push("/product");
//         } else {
//             alert('Incorrect Credntials!');
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <AppBar position="static" alignitems="center" color="primary">
//                     <Toolbar>
//                         <Grid container justify="center" wrap="wrap">
//                             <Grid item>
//                                 <h2 variant="h6">Shoping Cart Application</h2>
//                             </Grid>
//                         </Grid>
//                     </Toolbar>
//                 </AppBar>
//                 <Grid container spacing={0} justify="center" direction="row">
//                     <Grid item>
//                         <Grid
//                             container
//                             direction="column"
//                             justify="center"
//                             spacing={2}
//                             className="login-form"
//                         >
//                             <Paper
//                                 variant="elevation"
//                                 elevation={10}
//                                 className="login-background"
//                             >
//                                 <Grid item>
//                                     <Typography component="h1" variant="h8">
//                                         <AccountCircleIcon style={{ marginLeft: '40%', transform: 'scale(2.5) ', color: '#303F9F' }} />
//                                     </Typography>
//                                 </Grid><br />
//                                 <Grid item>
//                                     <form onSubmit={this.handleSubmit}>
//                                         <Grid container direction="column" spacing={2}>
//                                             <Grid item>
//                                                 <TextField
//                                                     type="email"
//                                                     placeholder="Email"
//                                                     fullWidth
//                                                     name="username"
//                                                     variant="outlined"
//                                                     value={this.state.username}
//                                                     onChange={(event) =>
//                                                         this.setState({
//                                                             [event.target.name]: event.target.value,
//                                                         })
//                                                     }
//                                                     required
//                                                     autoFocus
//                                                 />
//                                             </Grid>
//                                             <Grid item>
//                                                 <TextField
//                                                     type="password"
//                                                     placeholder="Password"
//                                                     fullWidth
//                                                     name="password"
//                                                     variant="outlined"
//                                                     value={this.state.password}
//                                                     onChange={(event) =>
//                                                         this.setState({
//                                                             [event.target.name]: event.target.value,
//                                                         })
//                                                     }
//                                                     required
//                                                 />
//                                             </Grid>
//                                             <Grid item>
//                                                 <Button
//                                                     variant="contained"
//                                                     color="primary"
//                                                     type="submit"
//                                                     className="button-block"
//                                                 >
//                                                     Submit
//                                                 </Button>
//                                             </Grid>
//                                         </Grid>
//                                     </form>
//                                 </Grid>
//                             </Paper>
//                         </Grid>
//                     </Grid>
//                 </Grid>
//             </div>
//         );
//     }
// }

// const mapStateToProps = state => {
//     return {
//         authentication: state.authentication.isAutherise
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         setAutherisationStatus: (id) => dispatch(setAutherisationStatus(true))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)