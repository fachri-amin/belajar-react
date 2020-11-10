import React from "react";
import "./Home.css";
import Card from "../../components/Card/Card";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Cards Components</h1>
        <hr />
        <Card name="Doritos" desc="Jajan" />
        <Card name="Luwak White Coffee" desc="Kopi" />
        <Card name="Milo" desc="Susu" />
        <Card name="Aqua" desc="Air Mineral" />
      </div>
    );
  }
}

export default Home;
