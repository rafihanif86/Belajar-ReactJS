import React, {Component} from 'react';
import YoutubeComp from '../../component/YoutubeComponent/YoutubeComp';

class Home extends Component{
    render(){
        return(
            <div>
                <YoutubeComp time="2.14" tittle="judul 1"/>
                <YoutubeComp time="3.50" tittle="judul 2"/>
                <YoutubeComp time="4.32" tittle="judul 3"/>
                <YoutubeComp time="1.30" tittle="judul 4"/>
                <YoutubeComp />
            </div>
        )
    }
}

export default Home;