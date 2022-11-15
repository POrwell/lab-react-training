import './App.css';
import IdCard from './components/IdCard';

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
    </div>
  );
}

export default App;
