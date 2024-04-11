import Card from "./components/Card";
import "./App.css";

function App() {
  const [users, setusers] = useState([]);
  useEffect(() => {
    /*aca el fetch hace el trabajo de un get*/
    fetch("https://661037ce0640280f219c98c2.mockapi.io/api/v2/users")
      .then((response) => {
        /*le damos el formato de json*/
        return response.json;
      })
      /*le colocamos una variable data y lo mostramos por consola*/
      .then((data) => {
        setusers(data[1]);
        console.log(data);
      });
  }, []);

  return (
    <div>
      {users.map((user) => {
        <Card user={user} />;
      })}
    </div>
  );
}
export default App;
