import { ChangeEvent, Component } from "react";

type CounterProps = {
  msg: string;
};
type CounterState = {
  counter: number;
  logs?: string;
};

class Counter extends Component<CounterProps, CounterState> {
  state: CounterState = {
    counter: 0,
    logs: ""
  };
  reset = () => {
    this.setState({ counter: 0 });
  };
  increment = () => {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  };
  decrement = () => {
    this.setState(({ counter, logs }) => ({ counter: counter - 1 }));
  };
  counterChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ counter: +e.target.value });
  };
  render() {
    let { msg } = this.props;
    let { counter } = this.state;
    return (
      <main className="Counter">
        <h1>Days Since Last Incident{msg}</h1>
        <p className="count">{counter}</p>
        <section className="controls">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.reset}>Reset</button>
          <button onClick={this.decrement}>Decrement</button>
        </section>
        <section className="controls">
          <form onSubmit={() => {}}>
            <label htmlFor="set-to">Set Count</label>
            <input id="set-to" type="number" onChange={this.counterChange} />
            <input type="submit" />
          </form>
        </section>
      </main>
    );
  }
}

class Application extends Component {
  render() {
    return <Counter msg="this is a lit course" />;
  }
}

export default Application;
