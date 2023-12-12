import React, { useState } from 'react'



function Silver() {

    const [bgc, bgchange] = useState('black');
    document.body.style.backgroundColor = bgc;

    const bg = (bgc) => {
        bgchange(bgc.target.value);
        document.body.style.backgroundColor = bgc.target.value
    }





    return (
        <>
            <h3>배경색</h3>
            <input type="text" value={bgc} onChange={bg} />
        </>
    )
}

export default Silver






