function useState(initialValue) {
  let _val = initialValue;
  const state = () => {
    return _val;
  };

  const setState = (newValue) => {
    _val = newValue;
  };
  return [state, setState];
}

const [count, setCount] = useState(1);
console.log(count);
setCount(2);
console.log(count);
