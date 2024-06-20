import { LinkedList } from "./LinkedList";

const App = () => {
  const ll = new LinkedList(12);
  ll.append(13);
  ll.append(14);
  ll.appendAfterValue(14, 18);
  ll.appendAtindex(2, 10);
  ll.prepend(9);
  console.log(ll.traverse());
  ll.pop();
  console.log(ll.traverse());
  ll.pop();
  console.log(ll.traverse());
  ll.pop();
  console.log(ll.traverse());
  ll.pop();
  console.log(ll.traverse());
  const a = ll.pop();
  console.log(ll.traverse());
  console.log(a);

  return <div>App</div>;
};

export default App;
