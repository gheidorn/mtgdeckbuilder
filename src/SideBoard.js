import React from 'react';
class SideBoard extends React.Component {
  changeHandler() {
    console.log('change happened');
  }
  render() {
    return (
      <div className="sideBoardCards">
        <h3>SideBoard</h3>
      </div>
    );
  }
}
export default SideBoard;
