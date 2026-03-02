import './App.css'
import data from './CollegeBasketballTeams.json'

type SchoolType = {
  school: string;
  name: string;
  city: string;
  state: string;
  [key: string]: unknown;
}

const SchoolNames = (data as unknown as { teams: SchoolType[] }).teams

function Welcome() {
  return <h1>March Madness team information!</h1>;
}

function School ({school, name, city, state}: {school: string; name: string; city: string; state: string; [key: string]: unknown}) {

  

  return (
    <>
      <img/>
      <h2>{school}</h2>
      <h3>Mascot: {name}</h3>
      <h3>Location: {`${city}, ${state}`}</h3>
    </>
    

  );
}


function SchoolList(){
  

  return(
    <>
      {
        SchoolNames.map((singleSchool) => (
          <School key={singleSchool.school} {...singleSchool}/>
        ))
      }
    </>
  );
}

function App() {
  
  

  return (
    <>
      <Welcome/>
      <SchoolList/>
      
    </>
  )
}

export default App
