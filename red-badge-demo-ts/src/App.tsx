import React from "react";
import PropsExample from "./components/PropsExample";
import PropsMapper from "./components/PropsMapping"

function App() {
  const visitedPlaces = ["Burning Man", "Toronto", "Panama City Beach", "The Great Smoky Mountains", "The Grand Canyon", "Ensenada", "Catalina Island", "Chicago", "Los Angeles"]
  return (
    <div>
      <PropsExample name="tom" business="myspace"  />
      <PropsMapper visited={visitedPlaces} />
    </div>
  );
}

export default App;
