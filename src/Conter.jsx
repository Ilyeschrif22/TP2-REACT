import { useState ,useEffect } from 'react'

const Conter = ({step}) => {


    const [count, setCount] = useState(step);

    useEffect(() => {
        console.log("step value is: ", count);
    }, [count])

    const incrmeter = () => {
        setCount(count + step);
    }

    const decrementer = () => {
        setCount(count - step);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <>


            <div className='compteur'>  Compteur : {count}</div>

            <button className='up' onClick={incrmeter}> + </button>

            <button className='down' onClick={decrementer}> - </button>

            <button className='reset' onClick={reset} > Reset </button>



        </>

    );
};

export default Conter;