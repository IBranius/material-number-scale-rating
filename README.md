# material-number-scale-rating

Preview:

![Material Number Rating](preview.png)

To import the component:

```javascript
import MaterialNumberRating from 'react-material-number-rating';
```

To use it Call Component named:

```javascript
<MaterialNumberRating start={} end={} callBack={}/>
```

Pass Rating Start and end Value. Example:

```javascript
<MaterialNumberRating start={1} end={10} callBack={}/>
```

To Get Rating Value use React.useCallBack from parent component. Example:

Parent Component:

```javascript
import { useCallback } from "react";

const callback = useCallback((count) => {
    console.log(count);
}, []);
```


Pass this callback to MaterialNumberRating component like this:

```javascript
<MaterialNumberRating start={1} end={10} callBack={callback}/>
```

There are some optional properties for customization:
1. backgroundColor : string 
2. textColor : string
3. onActiveBackgroundColor : string
4. onActiveTextColor : string
5. padding: number
6. spacing: number
