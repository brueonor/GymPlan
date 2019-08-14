import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      flexWrap: 'nowrap',
      justify: 'flex-start'
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
    textField: {
        display: 'flex',
        flex: 'flex-grow',
    }
  }));

function ExerciceItem() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        exercice: '',
        repetitions: '',
        repos: '',
      });

      const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
      };

    return (
        <Grid container className={classes.root}>
             <Grid container xs={12} justify="flex-start" spacing={1} flexWrap="nowrap">
                 <Grid item xs={6} >
                    <TextField
                        id="outlined-exercice"
                        label="Exercice"
                        className={classes.textField}
                        value={values.exercice}
                        onChange={handleChange('exercice')}
                        margin="normal"
                        variant="outlined"
                    />
                 </Grid>
                 <Grid item xs={3}>
                    <TextField
                        id="outlined-exercice"
                        label="Repetitions"
                        className={classes.textField}
                        value={values.repetitions}
                        onChange={handleChange('repetitions')}
                        margin="normal"
                        type="number"
                        variant="outlined"
                    />
                 </Grid>
                 <Grid item xs={3}>
                    <TextField
                        id="outlined-exercice"
                        label="Repos"
                        className={classes.textField}
                        value={values.repos}
                        onChange={handleChange('repos')}
                        margin="normal"
                        type="number"
                        variant="outlined"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">sec</InputAdornment>,
                          }}
                    />
                 </Grid>
             </Grid>
        </Grid>
    );
}

export default ExerciceItem;