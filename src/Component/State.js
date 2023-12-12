import React, { useState } from 'react'

import Silver from '../silver';

function State() {
    const [varnum, varnumSet] = useState(1); //랜더링해서 화면의 새로운 데이터를 업데이트해주는 함수





    const varnumSetting = () => { //함수처럼 인식시켜서 실행시켜줌
        varnumSet(varnum + 1);
        //varnumSet(++varnum)  varnum = varnum + 1
        //let mycount;
        //mycount = varnum + 1;
        //varnumSet(mycount);
        console.log(`hello${varnum}`)
    }
    return (
        <>
            <h1>
                {varnum}
            </h1>
            <button onClick={varnumSetting}>숫자가 바뀐것을 감지하면 거기만 새로고침해줌</button>
            <br />
            <Silver></Silver>

        </>
    )

}
// $("#Logo").on('mouseenter', () => {
//     $("#Logo").addClass("logo_1")
// })
// $("#Logo").on('mouseleave', () => {
//     $("#Logo").removeClass("logo_1");
// })



export default State
