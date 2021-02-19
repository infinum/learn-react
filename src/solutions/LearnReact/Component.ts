// export class Component {
//   // YOUR CODE GOES HERE
//   props;
//   state;
//   setState;
//   constructor(props) {}
// }

// --- SOLUTIONS ---

// solution for 03.state
import { renderComponent } from "./renderComponent";

export class Component {
  props;
  state;

  constructor(props) {
    this.props = props;
    this.state = {};
  }

  // addition of = {} is solution for 05.hooks
  setState(newState = {}) {
    this.state = { ...this.state, ...newState };
    //solution for 04.virtualDOM
    renderComponent(this);
  }

  render() {}
}
