import React, {useState} from "react";
import {Grid, Paper} from "@material-ui/core";
import {arrayOf, func, number, string} from 'prop-types';

const MaterialNumberRating = ({
                    start,
                    end,
                    current,
                    gap = 1,
                    itemPerGrid = true,
                    backgroundColor = "#FF2D5526",
                    textColor = "#780017",
                    onActiveBackgroundColor = "#FF2D55",
                    onActiveTextColor = "#780017",
                    padding = [15, 15, 0, 0],
                    spacing = 1,
                    borderRadius = 0,
                    fontWeight = "bolder",
                    fontSize = 20,
                    mouseEnteredOn,
                    clickedOn
                }) => {

    const getRatingArray = (startIndex , endIndex) => {
        let array = [];
        for (let i = startIndex; i <= endIndex; i += gap) {
            array.push(i);
        }
        return array;
    };

    const preparedArray = getRatingArray(start, end);

    const [current_index, setIndex] = useState(preparedArray.indexOf(current));

    return (
        <div style={{
            flexGrow: 1,
        }}>
            <Grid container spacing={spacing}>
                {preparedArray.map((a, index) => (
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
                            onClick={() => clickedOn(preparedArray[index])}
                            onMouseEnter={() => {
                                setIndex(index)
                                mouseEnteredOn(preparedArray[index])
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

export default MaterialNumberRating;

MaterialNumberRating.propTypes = {
    start : number.isRequired,
    end : number.isRequired,
    current: number.isRequired,
    gap: number,
    itemPerGrid: number,
    backgroundColor: string,
    textColor: string,
    onActiveBackgroundColor: string,
    onActiveTextColor: string,
    padding: arrayOf(number),
    spacing: number,
    borderRadius: number,
    fontWeight: string,
    fontSize: number,
    mouseEnteredOn: func.isRequired,
    clickedOn: func.isRequired
}