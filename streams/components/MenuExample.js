import React, { Component } from "react";
import { Menu, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ImageExampleWrapped = () => (
  <Image
    key="img2"
    src="https://react.semantic-ui.com/logo.png"
    wrapped
    text-align="center"
    avatar
  />
);
//src= "https://react.semantic-ui.com/logo.png"/>'
const items = [
  {
    key: "img1",
    // children: (Component, componentProps) => (
    //   <Component {...componentProps} color="red" />
    // ),
    children: ImageExampleWrapped,
  },
  { key: "editorials", active: true, name: "All Streams", as: Link, to: "/" },
  { key: "review", name: "New Stream", as: Link, to: "/streams/new" },
  { key: "events", name: "Users", as: Link, to: "/quotes/show" },
];

const MenuExample = () => <Menu items={items} />;

export default MenuExample;

export class MyStackableMenu extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable>
        <Menu.Item as={Link} to="/">
          <img src="https://react.semantic-ui.com/logo.png" />
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/"
          name="features"
          active={activeItem === "features"}
          onClick={this.handleItemClick}
        >
          All Streams
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/streams/new"
          name="streamNew"
          active={activeItem === "streamNew"}
          onClick={this.handleItemClick}
        >
          New Stream
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/quotes/show"
          name="quotes"
          active={activeItem === "quotes"}
          onClick={this.handleItemClick}
        >
          All Users
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/quotes/new"
          name="quoteNew"
          active={activeItem === "quoteNew"}
          onClick={this.handleItemClick}
        >
          New User
        </Menu.Item>

        <Menu.Item
          name="sign-in"
          active={activeItem === "sign-in"}
          onClick={this.handleItemClick}
        >
          Sign-in
        </Menu.Item>
      </Menu>
    );
  }
}
