import React from 'react';
import request from 'request';
class CardPool extends React.Component {
  getInitialState() {
    return {
      cards: []
    }
  }

  componentDidMount() {
    var _this = this;
    this.serverRequest = request({
          uri: 'http://localhost:3000/static/MM3.json',
          qs: {},
          method: 'GET'

      }, function(error, response, body) {
          if (!error && response.statusCode == 200) {

              console.log(body);
              //console.log(makesAndModelsList);
              //console.log('found ' + _makesAndModelsList.mk.length + ' makes');

              // _makesAndModelsList.mk.forEach(function(mk) {
              //     _makes.push({"name":mk.nm,"cn":mk.cn,"id":mk.id});
              // });

              //console.log(_makes);
              // console.log("Makes have been loaded from MVIS ");

          } else {
              console.error("Unable to send message.");
              //console.error(response);
              console.error(error);
              resolve(error);
          }
      });
  }

  changeHandler() {
    console.log('change happened');
  }

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" />
          </div>
        </form>
        <div className="cardPool">
        </div>
      </div>
    );
  }
}
export default CardPool;
