import React, { useState } from 'react'

function Settime() {
    const [time, timePlus] = useState(1);
    const updateTime = () => {
        timePlus(time + 1);
    }

    return (
        <div>
            <p>현재시각 : {time} 시</p>
            <br />
            <button onClick={updateTime}>Update</button>
        </div>
    )
}

export default Settime
