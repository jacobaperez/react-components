// TODO

var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList item={['limes', 'salt', 'tequila', 'food']} />
  </div>
);



class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    }
  }

  onListItemClick(event) {
    this.setState({
      done: !this.state.done
    });
    console.log('i got clicked', event);
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    }
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
    );
  }
}




var GroceryList = (props) => (
  <ul>
    {props.item.map( item => <GroceryListItem item={item} />)}
  </ul>
);





ReactDOM.render(<App />, document.getElementById('app'));
