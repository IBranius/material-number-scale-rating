import React, {useState} from "react";
import {Grid, Paper} from "@material-ui/core";
import {number} from "prop-types";

export default function MaterialNumberRating({ start, end, backgroundColor = "#FFFFFF", textColor = "#000000",
onActiveBackgroundColor = "#2196f3", onActiveTextColor = "#FFFFFF", padding = 2, callBack}) {
    const [current_index, setIndex] = useState(0);

    const numberRatingArray = (startIndex , endIndex) => {
       let array = [];
        for (let i = startIndex; i < endIndex; i++) {
            array.push(i);
        }
        return array;
    };

    return (
        <div style={{
            flexGrow: 1,
        }}>
            <Grid container spacing={1}>
                {numberRatingArray(start, end).map((a, index) => (
                    <Grid item sm key={index}>
                        {(current_index > index) ? (
                            <Paper
                                style={{
                                    textAlign: "center",
                                    padding: padding,
                                    backgroundColor: onActiveBackgroundColor,
                                    color: onActiveTextColor
                                }}
                                onMouseEnter={() => {
                                    setIndex(index)
                                    callBack(index)
                                }}
                            >
                                {a}
                            </Paper>
                        ) : (
                            <Paper
                                style={{
                                    textAlign: "center",
                                    padding: padding,
                                    backgroundColor: backgroundColor,
                                    color: textColor
                                }}
                                onMouseEnter={() => {
                                    setIndex(index + 1)
                                    callBack(index + 1)
                                }}
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