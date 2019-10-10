import React from 'react';
import './Video.css';
import MyAdmin from './Admin/Admin'
import { createSession, OTPublisher, OTSubscriber } from 'opentok-react';
import User from './User/User';
import { subscriberAction } from '../store/actions/subscriberAction';
import { connect } from 'react-redux';

const api = {
  apiKey: process.env.REACT_APP_API_KEY,
  sessionId: process.env.REACT_APP_SESSION_ID,
  token: process.env.REACT_APP_TOKEN,
}

class Video extends React.Component {
  state = {
    streams: [],
    sub: {}
  }

  componentWillMount() {

    this.sessionHelper = createSession({
      apiKey: api.apiKey,
      sessionId: api.sessionId,
      token: api.token,
      onStreamsUpdated: streams => { this.setState({ streams }); }
    });

    this.sessionHelper.session.on('streamCreated', event => {
      this.setState({
        sub: event.stream.connection
      })
      console.log(event.stream)
      this.props.dispatch(subscriberAction(event.stream.connection))
    })
  }
  componentWillUnmount() {
    this.sessionHelper.disconnect();
  }

  render() {
    return (
      <div>
        {this.props.Admin ?
          // Här skickar vi subscriber object till admin, samt sessionet,
          <MyAdmin sub={this.state.sub} session={this.sessionHelper.session} />
          : <User session={this.sessionHelper.session} />}

        <OTPublisher
          session={this.sessionHelper.session}
          properties={{
            publishVideo: true,
            width: "100%",
            height: "100%",
            resolution: "640x480",
          }}></OTPublisher>

        {this.state.streams.map(stream => {
          return (
            <OTSubscriber
              key={stream.id}
              session={this.sessionHelper.session}
              stream={stream}
            />
          );
        })}
      </div>
    );
  }
}

export default connect(null, null)(Video); 
