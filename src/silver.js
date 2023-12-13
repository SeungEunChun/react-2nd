import React, { useState } from 'react'

function Silver() {

    const [bgc, colorchange] = useState('white');
    document.body.style.backgroundColor = bgc;

    const cssChange = (bgc) => {
        colorchange(bgc.target.value);
        document.body.style.backgroundColor = bgc.target.value
    }






    return (
        <div>
            <h3>배경색을 입력해 주세요!</h3>
            <input type="text" onChange={cssChange} value={bgc} />
        </div>
    )
}

export default Silver
