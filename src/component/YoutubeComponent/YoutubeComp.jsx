import React from 'react';
import './YoutubeComp.css'

const YoutubeComp = (props) => {
    return (
        <div className="card">
            <img src="https://exp.cdn-hotels.com/hotels/12000000/11970000/11966000/11965957/8ff8687b_z.jpg?impolicy=fcrop&w=500&h=333&q=high" alt="Thumbnail" ></img>
            <p>{props.time}</p>
            <div class="container">
                <h4><b>{props.tittle}</b></h4>
                <p>Desc here</p>
            </div>
        </div>
    )
}

YoutubeComp.defaultProps = {
    time: '00.00',
    tittle: 'Judul'
}

export default YoutubeComp;