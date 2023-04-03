
import React, { useMemo, useState, useRef, useImperativeHandle } from 'react'

function Memo() {
    // const [inputValue, setInputValue] = useState('')
    const [darkTheme, setDarkTheme] = useState(false)

    const inputValue = useRef(0)

    console.log(inputValue)


    function handleChange(e) {
        // setInputValue(Number(e.target.value))
        inputValue.current = e.target.value
    }

    function toggleTheme() {
        darkTheme ? setDarkTheme(false) : setDarkTheme(true)
    }

    const style = {
        height: '100vh',
        backgroundColor: darkTheme ? '#000' : '#fff',
        color: darkTheme ? '#fff' : '#000'
    }

    const square = useMemo(() => {
        return calculateSquare(inputValue.current)
    },
        [inputValue.current]
    )

    function calculateSquare(num) {
        for (let i = 0; i < 1000000000; i++) { }
        return num * num;
    }




    
    return (
        <div style={style}>
            <input type='text' placeholder='Enter a number' ref={inputValue} onChange={handleChange} />
            <button onClick={toggleTheme}>Change Theme</button>
            <p>{square}</p>
        </div>
    )
}

export default Memo



// useImperativeHandle(), forwardRef