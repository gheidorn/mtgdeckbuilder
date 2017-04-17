import React, { Component } from 'react';
import request from 'request';
import _ from 'lodash';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import CardSearch from './CardSearch';
import CardPool from './CardPool';
import MainBoard from './MainBoard';
import SideBoard from './SideBoard';

class DeckBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ''
    };
  }

  render() {
    return (
      <div id="container" className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <CardSearch />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8">
            <MainBoard />
          </div>
          <div className="col-sm-4">
            <SideBoard />
          </div>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(DeckBuilder);
