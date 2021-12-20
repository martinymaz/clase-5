import { useState } from "react";


const useCounter = (init=1000) => {
    const [stateNumber, setStateNumber] = useState(init);

    const increment = () =>{
        setStateNumber(stateNumber + 1);
    }

    const decrement = () =>{
        setStateNumber(stateNumber - 1);
    }

    const reset = () => {
        setStateNumber(init);
    }

    return{
        stateNumber, increment, decrement, reset
    }
}

export default useCounter