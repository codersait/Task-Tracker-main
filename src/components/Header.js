// import React from 'react'
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title = "Task Tracker", toggleShow, showAddTask }) => {
  const handleClick = () => {
    console.log("Click with handleClick from Header");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAddTask ? "red" : "rgb(14, 177, 27)"}
        text={showAddTask ? "Close Add Task Bar" : "Show Add Task Bar"}
        toggleShow={toggleShow}
      />
    </header>
  );
};

//DEFAULT PROPS
// Header.defaultProps = {
//   title: "Task Tracker",
// };

// Header.propTypes = {
//   title: PropTypes.string.isRequired,
// };

export default Header;
