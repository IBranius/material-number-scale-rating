import React, {useState} from "react";
import {Grid, Paper} from "@material-ui/core";

export default function MaterialNumberRating({ start, end, backgroundColor = "#FFFFFF", textColor = "#000000",
onActiveBackgroundColor = "#2196f3", onActiveTextColor = "#FFFFFF", padding = 2, spacing = 1, callBack}) {
    const [current_index, setIndex] = useState(0);
    const array = [];

    const numberRatingArray = (startIndex , endIndex) => {
        for (let i = startIndex; i <= endIndex; i++) {
            array.push(i);
        }
        return array;
    };

    return (
        <div style={{
            flexGrow: 1,
        }}>
            <Grid container spacing={spacing}>
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
                                    callBack(array[current_index])
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
                                    setIndex(index)
                                    callBack(array[current_index])
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