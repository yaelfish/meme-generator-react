import { useState } from 'react';

function useColor(initialVal) {

    const [value, setValue] = useState(initialVal);

    const reset = () => {
        setValue(initialVal);
    };

    const bind = {
        value: value,
        onChange: e => setValue(e.target.value)
    }

    return [value, bind, reset];
};
export default useColor;