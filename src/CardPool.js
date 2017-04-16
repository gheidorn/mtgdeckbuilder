import React from 'react';
import request from 'request';
import _ from 'lodash';
class CardPool extends React.Component {
  constructor(props) {
    super(props);
    this.refs = [],
    this.state = {
      cards: [],
      cardPool: [],
      searchText: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    //console.log(this.state.cards);
    this.setState({
      searchText: event.target.value,
      cardPool: _.filter(this.state.cards, function(o) {
        return o.name.toUpperCase().includes(event.target.value.toUpperCase());
      })
    });
  }

  componentWillUpdate() {
    var query = this.refs.searchInput.value; // this is the search text
    //console.log(query);
    //console.log('componentWillUpdate: ' + this.state.cards);
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

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  changeHandler() {
    console.log('change happened');
  }

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <input type="text" ref="searchInput" className="form-control" onChange={this.handleChange} />
          </div>
        </form>
        <div className="cardPool">
          {this.state.cardPool.map(function(card) {
            return (
              <div key={card.multiverseid} className="card">
                <img src={'http://gatherer.wizards.com/Handlers/Image.ashx?type=card&multiverseid=' + card.multiverseid} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default CardPool;
