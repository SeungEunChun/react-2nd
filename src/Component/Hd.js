import { useCallback, useState } from 'react'
import hd from '../css/hd.module.scss'
import naviArr from '../data/naviArr.json'



export default function Hd() {
    const [logoover, setlogo] = useState("");

    return (
        <header id="hd" className="container d-flex fixed-top border-bottom justify-content-between">
            <h1><a href="#" className={hd.gnblist}><div id='Logo' onMouseOver={() => { setlogo("hover") }} onMouseLeave={() => { setlogo("") }} className={logoover}></div></a></h1>
            <ul id="gnb" className="d-flex">
                {
                    naviArr.map((el, idx) => {
                        return <li key={`list${idx}`} className={`list${idx}`}> <a href={el.href}>{el.nm}</a></li>
                    })
                }

            </ul>
        </header >
    )
}








