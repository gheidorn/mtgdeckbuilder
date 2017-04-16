import React from 'react';
class MainBoard extends React.Component {
  changeHandler() {
    console.log('change happened');
  }
  render() {
    return (
      <div className="mainBoardCards">
        <h3>MainBoard</h3>
      </div>
    );
  }
}
export default MainBoard;
