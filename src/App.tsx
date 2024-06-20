import { LinkedList } from "./LinkedList";

const App = () => {
  const ll = new LinkedList(12);

  console.log(ll.traverse(), ll.length);

  ll.append(14);
  console.log(ll.traverse(), ll.length);

  ll.appendAfterValue(14, 18);
  console.log(ll.traverse(), ll.length);

  ll.appendAtindex(2, 10);
  console.log(ll.traverse(), ll.length);

  ll.prepend(9);
  console.log(ll.traverse(), ll.length);

  ll.popElement(12);
  console.log(ll.traverse(), ll.length);

  ll.popElement(9);
  console.log(ll.traverse(), ll.length);
  ll.shift();
  console.log(ll.traverse(), ll.length);

  return <div>App</div>;
};

export default App;
