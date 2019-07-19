import React from "react";

const fetchItem = async id => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  const item = await data.json();
  return item;
};

class TicketDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetchItem(this.props.match.params.id).then(data => {
      this.setState({ data: data });
      console.log(data, this.props.match.params.id);
    });
  }

  render() {
    return (
      <div>
        <h3>Ticket Detail</h3>
        <h3>{this.state.data.title}</h3>
        <h5>{this.state.data.body}</h5>
      </div>
    );
  }
}

export default TicketDetail;
