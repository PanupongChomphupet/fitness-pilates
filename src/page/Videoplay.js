import styles from '../styles/Videoplay.module.css'
import ReactPlayer from 'react-player'
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import QierPlayer from 'qier-player';

function Videoplay() {
    const id = useParams().id;
    const level = useParams().level;
    const [vel, setvel] = useState([])

    useEffect(() => {
        axios({
            method: 'POST',
            url: 'http://104.155.150.122/video',
            headers: { "Content-Type": "application/json" },
            data: JSON.stringify({
                id,
                level
            })
        }).then(res => {
            setvel(res.data.level)
        })

    }, [])
    return (
        <div className={styles.video}>
            <div>
                <h2>เลเวล: {vel.level}. {vel.name}</h2>
                {vel.video ? vel.video.map((item, index) =>
                    <div key={index}>
                        <QierPlayer
                            width={"100%"}
                            height={230}
                            language="en"
                            showVideoQuality={false}
                            themeColor="#abc123"
                            srcOrigin={`https://storage.googleapis.com/video-course/${vel.video[index]}`}
                        />
                    </div>
                ) : null}
            </div>
        </div>
    )
}
export default Videoplay;

{/* <Player 
                        platsIntine
                        src = "/video/OTEz-MTYyMTI4MzEwNTY3Mg==-NzY0.mp4"
                /> */}