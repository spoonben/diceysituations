import React, { Component } from 'react';
import './episode.css';

class Episode extends Component {
  render() {
    return (
        <div className="episode">
            <div className="title">{this.props.episodeNumber}. {this.props.title}</div>
            <div className="description">
                {this.props.description}
                <div className="date">Date: <strong>{this.props.date}</strong></div>
            </div>
            <audio controls>
                <source src={this.props.location} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
  }
}

export default Episode;
