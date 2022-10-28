import React, { Component } from "react";

export const Todos = () => {
  const [title, setTitle] = React.useState('Todos');
  return "Todos";
};

export class TodosComponent extends Component {
  constructor(props) {
    super(props);
    this.appTitle = 'Todos';
    this.state = {
      title: 'Todos'
    }
  }

  updateTitle() {
    this.setState({ title: 'Todos updated' });
  }

  render() {
    return "TodosComponent";
  }
}
