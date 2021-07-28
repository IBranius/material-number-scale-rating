# material-number-scale-rating

To use it Call Component named: 

```<MaterialNumberScaleRating start={} end={} callBack={}/>```

Pass Rating Start and end Value. Example:

```<MaterialNumberScaleRating start={1} end={10} callBack={}/>```

To Get Rating Value use React.useCallBack from parent component. Example:

Parent Component:

```
import { useCallback } from "react";

const callback = useCallback((count) => {
    console.log(count);
}, []);
```


Pass this callback to MaterialNumberScaleRating component like this:

```<MaterialNumberScaleRating start={1} end={10} callBack={callback}/>```
