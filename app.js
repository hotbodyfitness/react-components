// TODO
//we get rid of the parens and implicit return
//and add in an explicit return statement because we have more than 1 item
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li>{this.props.groceryItem}</li>
    );
  }

  // <ul>
  //   <li>{this.props.groceryItems[0]}</li>
  //   <li>{props.groceryItems[1]}</li>
  // </ul>

}
//where are defining items?
var GroceryList = (props) => (
  // items = ['apple', 'orange'];
  <ul>
    {props.items.map(groceryItem =>
      <GroceryListItem groceryItem={groceryItem} />
    )}
  </ul>
);


// var App = () => (
//   <div>
//     <h2>My Todo List</h2>
//     <GroceryList items={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/> // Here we are creating an instance of the `TodoList` component
//   </div>
// );

ReactDOM.render(<GroceryListItem />, document.getElementById('app'));




