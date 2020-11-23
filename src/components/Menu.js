import React, { Fragment } from 'react';
import { Nav, NavLink, Navbar, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function Menu(props) {
  function clickHandler(e) {
    console.log(`${e.target.name} button clicked`);
  }

  return (
    <Fragment>
      <Navbar>
        <h1>{props.title}</h1>
        <Link to='/'>
          <i className={props.icon}></i>{' '}
        </Link>
      </Navbar>
      <Nav>
        <Link
          to='/page1'
          onClick={clickHandler}
          name={props.btn1}
          className='first-color nav-link'
        >
          {props.btn1}
        </Link>{' '}
        <Link
          to='/page2'
          onClick={clickHandler}
          name={props.btn2}
          className='first-color nav-link'
        >
          {props.btn2}
        </Link>{' '}
        <Link
          to='/page3'
          onClick={clickHandler}
          name={props.btn3}
          className='first-color nav-link'
        >
          {props.btn3}
        </Link>{' '}
      </Nav>
    </Fragment>
  );
}

export default Menu;
