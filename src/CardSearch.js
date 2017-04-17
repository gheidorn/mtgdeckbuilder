import React, { Component } from 'react';
import request from 'request';
import _ from 'lodash';

import CardPool from './CardPool';

export default class CardSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: '',
      cards: [],
      filteredCards: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if(event.target.value !== '') {
      this.setState({
        searchInput: event.target.value,
        filteredCards: _.filter(this.state.cards, function(o) {
          return o.name.toUpperCase().includes(event.target.value.toUpperCase());
        })
      });  
    }
  }

  componentDidMount() {
    var _this = this;
    this.serverRequest = request({
          //uri: 'http://localhost:3000/static/MM3.json',
          uri: 'http://localhost:8080/www/static/MM3.json',
          qs: {},
          method: 'GET'

      }, function(error, response, body) {
          if (!error && response.statusCode == 200) {
            var set = JSON.parse(body);
            console.log('found ' + set.cards.length + ' cards');
            console.log(set.cards[0]);
            _this.setState({
              cards: set.cards
            });
          } else {
              console.error("Unable to send message.");
              //console.error(response);
              console.error(error);
              resolve(error);
          }
      });
  }

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" onChange={this.handleChange} />
          </div>
        </form>
        <CardPool cards={this.state.filteredCards} />
      </div>
    );
  }
}
