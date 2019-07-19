import React from "react";
import { Link } from "react-router-dom";

export const TopicDetail = ({ match }) => {
  console.log(match);
  return (
    <div>
      <h3>{match.params.topicId}</h3>
      <ul>
        <li>
          <Link to="/Topics">Back to Topics</Link>
        </li>
      </ul>
    </div>
  );
};
