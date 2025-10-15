import React, { useState } from 'react'

const Home = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <p>count vaule : {count}</p>
            <button onClick={() => setCount(count + 1)}>click me</button>
        </>
    )
}

export default Home