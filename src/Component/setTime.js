import React, { useState } from 'react'

function SetTime() {
    const [time, timehand] = useState(1);
    const timehandle = () => {
        timehand(time + 1);
    }

    return (



        <div>
            <span>현재시각 : {time} 시</span>
            <button onClick={timehandle}>Update</button>
        </div>
    )
}

export default SetTime
