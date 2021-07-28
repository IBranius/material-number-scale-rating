import React, {useState} from "react";
import {Grid, Paper} from "@material-ui/core";

export default function MaterialNumberRating({ start, end, backgroundColor = "#FFFFFF", textColor = "#000000",
                                          onActiveBackgroundColor = "#2196f3", onActiveTextColor = "#FFFFFF", padding = 2, spacing = 1,
                                          required = false, callBack}) {

    const [current_index, setIndex] = useState(required ? 0 : -1);
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
                        {(current_index >= index) ? (
                            <Paper
                                style={{
                                    textAlign: "center",
                                    padding: padding,
                                    backgroundColor: onActiveBackgroundColor,
                                    color: onActiveTextColor,
                                    cursor: "pointer"
                                }}
                                onMouseEnter={() => {
                                    setIndex(index)
                                    callBack(array[index])
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
                                    color: textColor,
                                    cursor: "pointer"
                                }}
                                onMouseEnter={() => {
                                    setIndex(index)
                                    callBack(array[index])
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