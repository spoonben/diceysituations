import React, { Component } from 'react';
import Episode from './episode';
import EpisodeList from './episode-list';
import './episodes.css';

class Episodes extends Component {

  getEpisodes = () => {
    let list = [];
    EpisodeList.forEach((ep, index) => {
        list.push(<Episode {...ep} key={index} episodeNumber={index} />);
    });
    return list;
  }

  render() {
    return (
      <div className="episode-wrap">
        <h3>Episodes</h3>
        <div className="episodes">
          {this.getEpisodes()}
        </div>
      </div>
    );
  }
}

export default Episodes;
