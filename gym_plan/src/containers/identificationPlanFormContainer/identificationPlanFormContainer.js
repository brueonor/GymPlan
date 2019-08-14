import React from 'react';
import 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dateContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    datePicker: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    }
  }));

function IdentificationPlanFormContainer() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        title: '',
        description: '',
      });

    const [selectedDateDebut, setSelectedDateDebut] = React.useState(new Date());
    const [selectedDateFin, setSelectedDateFin] = React.useState(new Date());
    function handleDateDebutChange(date) {
      setSelectedDateDebut(date);
    }

    function handleDateFinChange(date) {
        setSelectedDateFin(date);
      }

    const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value });
    };

    return (
        <React.Fragment>
           
            <form className={classes.container} noValidate={false} autoComplete="on">
                <TextField
                    id="outlined-name"
                    label="Title"
                    className={classes.textField}
                    value={values.title}
                    onChange={handleChange('title')}
                    margin="normal"
                    variant="outlined"
                    required
                />

                <TextField
                    id="outlined-description"
                    label="Description"
                    className={classes.textField}
                    value={values.description}
                    onChange={handleChange('description')}
                    margin="normal"
                    variant="outlined"
                    multiline
                    rows="4"
                    required
                />

                <div className={classes.dateContainer}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils} className={classes.dateContainer}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-debut"
                            label="Starting date"
                            className={classes.datePicker}
                            required
                            value={selectedDateDebut}
                            onChange={handleDateDebutChange}
                            KeyboardButtonProps={{
                              'aria-label': 'change date',
                            }}
                        />
                         <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-fin"
                            label="Ending date"
                            className={classes.datePicker}
                            required
                            value={selectedDateFin}
                            onChange={handleDateFinChange}
                            KeyboardButtonProps={{
                              'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </div>
                
            </form>
        </React.Fragment>
    );
}

export default IdentificationPlanFormContainer;