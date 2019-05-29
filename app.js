// // TODO
// //we get rid of the parens and implicit return
// //and add in an explicit return statement because we have more than 1 item
// class GroceryListItem extends React.Component {

//   constructor(props) {
//     console.log('line 6', props);
//     super(props);

//   }
//   render() {
//     return (
//       <li>{this.props.asdf}</li>
//     );
//   }

// }

// var GroceryList = (props) => {

//   var items = ['apple', 'orange'];

//   render() {
//     return (
//   <ul>
//     {console.log(items)}
//     {items.map(groceryItem => {
//       console.log(props)

//       return (<GroceryListItem asdf ={groceryItem}/> )
//     }
//     )}
//   </ul>

//   )
//   }

// }

// ReactDOM.render(<GroceryList /*items = {['apple', 'orange']} */ />, document.getElementById('app'));



// TODO
// we get rid of the parens and implicit return
// and add in an explicit return statement because we have more than 1 item
class GroceryListItem extends React.Component {
  constructor(props) {
    console.log('line 49', props);
    super(props);
    this.state = {
      done: false
    };

  }

  onListItemHover(){
    this.setState({
      done: !this.state.done
    });
  }

  render() {

    var style ={
      fontWeight: this.state.done ? 'bold' : 'normal'
    };


    return (
      <li style = {style} onMouseOver = {this.onListItemHover.bind(this)}>{this.props.asdf}</li>
    );
  }

}

var GroceryList = (props) => (

  <ul>
    {console.log('line 65', props)}
    {props.items.map(groceryItem => {
      return(<GroceryListItem asdf ={groceryItem} />)
    }
    )}
  </ul>
);

ReactDOM.render(<GroceryList items = {['chicken', 'beef']}/>, document.getElementById('app'));

