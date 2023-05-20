// not done yet... still working on it!!

function useState(initialValue) {
  debugger;
  const internalState = {
    value: initialValue,
    get state() {
      return this.value;
    },
    set state(newValue) {
      debugger;
      this.value = newValue;
    },
  };

  const getValue = () => internalState.state;
  const setState = (newValue) => {
    internalState.state = newValue;
  };
  // let _val = initialValue;
  // const state_ = () => _val;

  // const setState = (newValue) => {
  //   _val = newValue;
  // };

  return [getValue, setState];
}

const [count, setCount] = useState(1);
console.log(count);
setCount(2);
console.log(count);
setCount(3);
console.log(count);
