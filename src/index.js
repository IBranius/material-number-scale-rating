import React, {useState} from "react";
import {Grid, Paper} from "@material-ui/core";

export default function MaterialNumberRating({start, end, current, itemPerGrid= false, backgroundColor = "#FF2D5526", textColor = "#780017",
                                                 onActiveBackgroundColor = "#FF2D55", onActiveTextColor = "#780017", padding = [15, 15, 0, 0], spacing = 1,
                                                 borderRadius = 0, fontWeight = "bolder", fontSize = 20, mouseEnteredOn, clickedOn}) {

    const [current_index, setIndex] = useState(current - 1);
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
                    <Grid item xs={itemPerGrid} key={index}>
                        <Paper
                            style={{
                                textAlign: "center",
                                paddingTop: padding[0],
                                paddingBottom: padding[1],
                                paddingRight: padding[2],
                                paddingLeft: padding[3],
                                backgroundColor: (current_index >= index) ? onActiveBackgroundColor : backgroundColor,
                                color: (current_index >= index) ? onActiveTextColor : textColor,
                                cursor: "pointer",
                                borderRadius: borderRadius,
                                fontWeight: fontWeight,
                                fontSize: fontSize

                            }}
                            onClick={() => clickedOn(array[index])}
                            onMouseEnter={() => {
                                setIndex(index)
                                mouseEnteredOn(array[index])
                            }}
                        >
                            {a}
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}