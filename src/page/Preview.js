import styles from '../styles/Preview.module.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import QierPlayer from 'qier-player';

function Preview() {
    const name = useParams().name;
    const level = useParams().level;
    const [preview, setpreview] = useState([])

    useEffect(() => {
        axios({
            method: "POST",
            url: "http://localhost:5000/preview",
            headers: { "Content-Type": "application/json" },
            data: JSON.stringify({
                name,
                level
            })
        }).then(res => {
            setpreview(res.data.level.previewvideo)
        })
    }, [])
    return (
        <div className={styles.bg}>
            <h2 className={styles.title}>ตัวอย่างวิดิโอ</h2>
            {preview ? preview.map((item, index) =>
                <div className={styles.video} key={index}>
                    <QierPlayer
                        width={"100%"}
                        height={230}
                        language="en"
                        showVideoQuality={false}
                        themeColor="#abc123"
                        srcOrigin={`https://storage.googleapis.com/video-course/${preview[index]}`}

                    />
                </div>
            ) : null
            }
        </div>
    )
}
export default Preview;