import React, { Component } from "react";
import model from "../assets/glassesImage/model.jpg";
import styles from "./model.module.css";
import data from "../assets/dataGlasses.json";
import modelG1 from "../assets/glassesImage/v1.png";
import modelG2 from "../assets/glassesImage/v2.png";
import modelG3 from "../assets/glassesImage/v3.png";
import modelG4 from "../assets/glassesImage/v4.png";
import modelG5 from "../assets/glassesImage/v5.png";
import modelG6 from "../assets/glassesImage/v6.png";
import modelG7 from "../assets/glassesImage/v7.png";
import modelG8 from "../assets/glassesImage/v8.png";
import modelG9 from "../assets/glassesImage/v9.png";

// [
//   {
//     id: 1,
//     price: 30,
//     name: "GUCCI G8850U",
//     url: "./glassesImage/v1.png",
//     desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
//   },
// ];
export default class Model extends Component {
  state = {};
  changeGlass = (data) => {
    let glass;
    switch (data) {
      case 1:
        glass = modelG1;
        break;
      case 2:
        glass = modelG2;
        break;
      case 3:
        glass = modelG3;
        break;
      case 4:
        glass = modelG4;
        break;
      case 5:
        glass = modelG5;
        break;
      case 6:
        glass = modelG6;
        break;
      case 7:
        glass = modelG7;
        break;
      case 8:
        glass = modelG8;
        break;
      case 9:
        glass = modelG9;
        break;
      default:
    }
    this.setState({ glass: glass });
  };
  renderGlass = () => {
    return data.map((item, index) => {
      return (
        <div
          onClick={() => {
            this.changeGlass(item.id);
          }}
          key={item.id}
          className={styles.glass}
        >
          <img src={item.url} alt={item.url} />
          <h3>{item.name}</h3>
          <h4>{item.price}$</h4>
          <p>{item.desc}</p>
        </div>
      );
    });
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles["model-glass"]}>
          <img className={styles.model} src={model} alt="" />
          <img className={styles["glass-on"]} src={this.state.glass} />
        </div>

        <div className={styles["glasses-wrapper"]}>{this.renderGlass()}</div>
      </div>
    );
  }
}
