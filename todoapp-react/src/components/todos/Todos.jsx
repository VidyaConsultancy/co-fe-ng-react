import React, { Component } from "react";

// react hooks introduced in 16.8v
// useState, useEffect, useCallback, useLayoutEffect, useReducer, useRef, useId

export const Todos = (props) => {
  let [title, setTitle] = React.useState('Todos');
  const handleClick = () => {
    setTitle('updated title');
  }

  React.useEffect(() => {

    return () => {

    }
  }, [title]);

  return (
    <div className="container">
      <h2 title={title}>
        {title} | {props.version}
      </h2>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={props.updateVersion}>Update Version</button>
    </div>
  );
};

/**
 * Phase I Mounting -> invoked only once
 * constructor
 * static getDerivedStateFromProps
 * render
 * componentDidMount
 * Phase II Updating
 * static getDerivedStateFromProps
 * shouldComponentUpdate
 * render
 * static getSnapshotBeforeUpdate
 * componentDidUpdate
 * Phase III Unmounting ->  invoked only once
 * componentWillUnmount
 */
export class TodosComponent extends Component {
  constructor(props) {
    super(props);
    this.appTitle = 'Todos';
    this.state = {
      title: 'Todos',
      todos: ['Learn HTML'],
    }
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({ title: 'Todos updated' });
  }

  render() {
    return (
      <div className="container">
        <h2 title={this.state.title}>{this.state.title} || {this.appTitle}</h2>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}
