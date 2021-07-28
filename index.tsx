import {createStyles, Grid, makeStyles, Paper, Theme} from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: "center",
            color: theme.palette.text.secondary
        }
    })
)

export default function AutoGrid() {
    const [current_index, setIndex] = useState(0);
    const classes = useStyles();
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
    return (
      <div className={classes.root}>
        <Grid container spacing={1}>
          {array.map((a, index) => (
            <Grid item sm key={index}>
              {current_index > index ? (
                <Paper
                  className={classes.paper}
                  style={{
                    backgroundColor: "yellow"
                  }}
                  onMouseEnter={() => setIndex(index)}
                >
                  {a}
                </Paper>
              ) : (
                <Paper
                  className={classes.paper}
                  style={{
                    backgroundColor: "white"
                  }}
                  onMouseEnter={() => setIndex(index + 1)}
                >
                  {a}
                </Paper>
              )}
            </Grid>
          ))}
        </Grid>
      </div>
    );
}
  