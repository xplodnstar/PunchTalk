import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button'
// import LocationOn from '@material-ui/icons/LocationOn';
// import Image from '@material-ui/icons/Image';
// import Face from '@material-ui/icons/Face';



const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    // margin: {
    //     margin: theme.spacing.unit,
    // },
    textField: {
        flexBasis: 200,
    },
}));

const ranges = [
    {
        value: 'Available',
        label: 'Available',
    },
    {
        value: 'Busy',
        label: 'Busy',
    },
    {
        value: 'Do Not Disturb',
        label: 'Do Not Disturb',
    },
];

const Profile = (props) => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        password: '',
        status: '',
        statusRange: '',
        showPassword: false,
        showConfirm: false,
    });

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleClickShowConfirm = () => {
        setValues({ ...values, showConfirm: !values.showConfirm });
    };

    function sendProfile(e) {
        e.preventDefault()
        // sendProfData({ user, text, time: new Date() })
    }

    return (
        <div className={classes.root}>
            <form className="profileForm" onSubmit={sendProfile}>
                <div className="username">
                    <TextField
                        id="username"
                        className={classNames(classes.margin, classes.textField)}
                        variant="outlined"
                        label="Username"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">
                                <i className="material-icons">account_box</i>
                            </InputAdornment>,
                        }}
                    />
                </div>
                <div className="password">
                    <TextField
                        id="password"
                        className={classNames(classes.margin, classes.textField)}
                        variant="outlined"
                        type={values.showPassword ? 'text' : 'password'}
                        label="Password"
                        value={values.password}
                        onChange={handleChange('password')}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton aria-label="Toggle password visibility" onClick={handleClickShowPassword}>
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>
                <div className="confirm">
                    <TextField
                        id="confirm"
                        className={classNames(classes.margin, classes.textField)}
                        variant="outlined"
                        type={values.showConfirm ? 'text' : 'confirm'}
                        label="Confirm"
                        value={values.confirm}
                        onChange={handleChange('confirm')}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton aria-label="Toggle confirm visibility" onClick={handleClickShowConfirm}>
                                        {values.showConfirm ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>
                <div className="fname">
                    <TextField
                        id="fname"
                        className={classNames(classes.margin, classes.textField)}
                        variant="outlined"
                        label="First Name"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">
                                <i className="material-icons">person</i>
                            </InputAdornment>,
                        }}
                    />
                </div>
                <div className="lname">
                    <TextField
                        id="lname"
                        className={classNames(classes.margin, classes.textField)}
                        variant="outlined"
                        label="Last Name"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">
                                <i className="material-icons">perm_identity</i>
                            </InputAdornment>,
                        }}
                    />
                </div>
                <div className="location">
                    <TextField
                        id="location"
                        className={classNames(classes.margin, classes.textField)}
                        variant="outlined"
                        label="Location"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">
                                <i className="material-icons">location_on</i>
                            </InputAdornment>,
                        }}
                    />
                </div>
                <div className="picURL">
                    <TextField
                        id="picture"
                        className={classNames(classes.margin, classes.textField)}
                        variant="outlined"
                        label="Picture"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">
                                <i className="material-icons">image</i>
                            </InputAdornment>,
                        }}
                    />
                </div>
                <div className="status">
                    <TextField
                        select
                        id="status"
                        className={classNames(classes.margin, classes.textField)}
                        variant="outlined"
                        label="Status"
                        value={values.statusRange}
                        onChange={handleChange('statusRange')}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">
                                <i className="material-icons">face</i>
                            </InputAdornment>,
                        }}
                    >
                        {ranges.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div><a href="/" className="chatLink"><Button variant="contained" color="primary" className="profDataButton">Submit</Button></a></div>
            </form>
        </div>
    );
}

export default Profile