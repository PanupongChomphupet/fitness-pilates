import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Show() {
    const [datas, setdata] = useState([])
    useEffect(() => {
        axios({
            method: "GET",
            url: "http://104.155.150.122/course",
            headers: { "Content-Type": "application/json" }
        }).then(res => {
            setdata(res.data.cos)
        })
    })
    return (
        <div>
            {datas.map((item, index) =>
                <div>
                    <span>{item.name}</span>
                </div>
            )}
        </div>
    )
}
export default Show;