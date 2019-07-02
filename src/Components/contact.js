import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import {TextField, Button, Icon, withStyles  } from '@material-ui/core';
import Photo from '../img/photo-2.png'
import classNames from 'classnames';
import PropTypes from 'prop-types';
const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    leftIcon: {
      marginRight: theme.spacing.unit,
    },
    rightIcon: {
      marginLeft: theme.spacing.unit,
    },
    iconSmall: {
      fontSize: 20,
    },
  });

  

class Contact extends Component {
 
    state = {
        name: '',
    };
    handleChange = name => event => {
      this.setState({
        [name]: event.target.value,
      });
    };
    handleClickVariant = variant => () => {
        // variant could be success, error, warning or info
        this.props.enqueueSnackbar('This is a warning message!', { variant });
      };
    render(){
        const { classes } = this.props;
        
        return (
            <div className='contact-body'>
                <Grid className= 'contact-grid'>
                    <Cell col={6}>
                        <img shadow={5} style={{height: '150px'}} src={Photo} alt=""/>
                        <h2 className='hi-web'>Thang Vu</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus ratione magni aperiam! Dolore architecto quas sit doloremque aspernatur. Explicabo quam nemo veniam dolorem quod. Assumenda nulla recusandae, sed adipisci ipsa, animi illo, maxime eveniet commodi voluptas eius. Molestiae, natus unde, vitae eos atque voluptate culpa labore, error deleniti nisi ex!</p>
                    </Cell>
                    <Cell col={6}>
                        <h2 className='hi-web'>Contact Form</h2>

                        <form action="">
                        <Grid>
                            <Cell col={12}>
                            <TextField
                                id="outlined-full-width"
                                label="Name/ Business Name"
                                style={{ margin: 8 }}
                                placeholder="eg: ABC company"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                />
                                
                            </Cell>
                            <Cell col={12}>
                            <TextField
                                id="outlined-full-width"
                                label="Email"
                                style={{ margin: 8 }}
                                placeholder="Eg: 123@gmail.com"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                />
                            <TextField
                                id="outlined-full-width"
                                label="Phone Number:"
                                style={{ margin: 8 }}
                                placeholder="Eg: 0213456789"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                />
                            <TextField
                                id="outlined-full-width"
                                label="Message"
                                style={{ margin: 8 }}
                                multiline
                                rows="4"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                />
                            <Button variant="contained" onClick={this.handleClickVariant('warning')}  className={classes.button}>
                                Send
                                {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
                                <Icon className={classes.rightIcon}>send</Icon>
                            </Button>
                            </Cell>
                            

                        </Grid>
                        </form>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

Contact.propTypes = {
    classes: PropTypes.object.isRequired,
    enqueueSnackbar: PropTypes.func.isRequired,
};
export default withStyles(styles)(Contact);