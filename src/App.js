import './App.css';
import IdCard from './components/IdCard';
import Greetings from "./components/Greetings";

const usersArray = [
  {
  lastName: 'Doe',
  firstName: 'John',
  gender: 'male',
  height: 178,
  birth: new Date("1992-07-14"),
  picture: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
  lastName: 'Obrien',
  firstName: 'Delores',
  gender: 'female',
  height: 172,
  birth: new Date("1988-05-11"),
  picture: "https://randomuser.me/api/portraits/women/44.jpg"
}
]

function App() {
  return (
    <div className="App">
      {usersArray.map((user) =>
   <IdCard user={user}/>
   )}
<Greetings lang="de">Ludwig</Greetings>
<Greetings lang="fr">François</Greetings>
    </div>
  );
}

export default App;
