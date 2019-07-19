import React from "react";
import { Link } from "react-router-dom";

const fetchItems = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const items = await data.json();
  return items;
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetchItems().then(data => {
      this.setState({ items: data });
    });
  }

  render() {
    const list = this.state.items.map(e => {
      return (
        <Link to={`/home/${e.id}`} key={e.id}>
          {" "}
          <li>{e.title}</li>
        </Link>
      );
    });
    return (
      <div>
        <h1>Home View</h1>
        <div>{list}</div>
      </div>
    );
  }
}

export default Home;
