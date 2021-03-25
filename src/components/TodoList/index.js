import React from 'react';

class TodoList extends React.Component {
  state = {
    entry: '',
    list: []
  }
  render() {
    return (
      <>
        <div className="center">
          <input type="text" value={this.state.entry} onChange={(e) => {
            this.setState({
              entry: e.target.value
            })
            e.target.focus();
          }} />
          <button onClick={() => {
            this.setState((prevState) => {
              const updatedList = prevState.list.concat(this.state.entry);
              return {
                entry: '',
                list: updatedList
              }
            })
          }}>Add</button>
        </div>
        <ul>
          {this.state.list.map((entry, index) => (
            <li key={index}>
              {entry}
              <button onClick={() => {
                this.setState((prevState) => {
                  const updatedList = [...prevState.list];
                  updatedList.splice(index, 1);
                  return {
                    list: updatedList
                  }
                })
              }}>
                <i className="fa fa-trash"></i>
              </button>
            </li>
          ))}
        </ul>
      </>
    )
  }
}

export default TodoList;
