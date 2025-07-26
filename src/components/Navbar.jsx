import { Component } from "react";
import { MenuItems } from "./MenuItem";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className={styles.NavbarItems}>
        <h1 className={styles.navbarLogo}>Trippy</h1>

        <div className={styles.menuIcons} onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul
          className={
            this.state.clicked
              ? `${styles.navMenu} ${styles.active}`
              : styles.navMenu
          }
        >
          {MenuItems.map((item, index) => {
            return (
              <li>
                <Link className={styles[item.cName]} to={item.url}>
                  <i className={item.icon}></i> {item.title}
                </Link>
              </li>
            );
          })}
          <Link to="/signUp">
            <button>Sign Up</button>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
