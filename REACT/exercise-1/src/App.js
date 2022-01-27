import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import User from './components/User'

let friends = [
  { id: 1, name: "Minik" },
  { id: 2, name: "Gırgır" },
  { id: 3, name: "Yami" }
]

function App() {
  return (
    <div>
      <User
        name="Mess"
        surname="Lif"
        isLoggedIn={true}
        age={25}
        friends={friends}
        address={{
          title: "Ankara",
          zip: 514
        }}
      />
    </div>
  );
}

export default App;
