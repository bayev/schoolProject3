import React, { Component } from 'react';
import * as Styles from './PauseVideoStyle';

const PausedVideo = (props) => {
    return (
        <Styles.PauseVideoContainer>
        <Styles.divPause>

            <Styles.divIcon>
                <button onClick={()=> props.ResumeVideo()}>
                    <i className="far fa-pause-circle" style={{fontSize:'40px', color:'darkred'}} onClick={()=> props.ResumeVideo()}/>
                </button>
            </Styles.divIcon>

            <Styles.divText>
                <h1>
                    Video is Paused
                    </h1>
                <p> Click to resume video</p>
            </Styles.divText>

        </Styles.divPause>
      
    </Styles.PauseVideoContainer>
    )
}


const PausingVideo = () => {
    return (
        <Styles.PauseVideoContainer>
        <Styles.divPause>

            <Styles.divIcon>
                <div className="ui active inline loader"></div> 
            </Styles.divIcon>

            <Styles.divText>
                <h1>
                    Pausing Video
                    </h1>
                <p> Please do not quit <br />
                    your app</p>
            </Styles.divText>
        
        </Styles.divPause>
      
    </Styles.PauseVideoContainer>
    )
}


class PauseVideo extends Component {

    state = {
        IsVideoOPaused:false,
    }

    PopUp = () =>{        

        setTimeout(() => {
            this.setState({
                IsVideoOPaused:true
            })
        }, 3000);
        
           }

componentDidMount(){
    this.PopUp()
}

    render() {
    
        return (
            <div>
                {this.state.IsVideoOPaused ? <PausedVideo ResumeVideo={this.props.ResumeVideo}/> : <PausingVideo/> }
            </div>
        )
    }
}

export default PauseVideo;