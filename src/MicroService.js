import React, { Component } from 'react';

class MicroServices extends Component {
    render() {
      return (
        <div>
          <h1> Build MicroService </h1>
          <ul className="micro">
            <button onClick={buildwriteapi}>
                Build write API
            </button>
            <button onClick={buildmanagerapi}>
                Build Manager API
            </button>
          </ul>
        </div>
      );
    }
  }
  
  const buildwriteapi = 'writeapi clicked';
  const buildmanagerapi = 'Manager API clicked';

  export default MicroServices;
  