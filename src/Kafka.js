import React, { Component } from 'react';

class Kafka extends Component {
    render() {
      return (
        <div>
          <h1> Build Kafka </h1>
          <ul className="kafka">
            <button onClick={createkafka}>
                Create Kafka Topic
            </button>
            <button onClick={deletekafka}>
                Delete Kafka Topic
            </button>
          </ul>
        </div>
      );
    }
  }
  
  const createkafka = 'Create Kafka clicked';
  const deletekafka = 'Delete Kafka API clicked';

  export default Kafka;
  