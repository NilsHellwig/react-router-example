import { useParams } from "react-router-dom";

function City() {
  const { city } = useParams();

  return (
    <div>
      <h2>Konzerte in: {city.charAt(0).toUpperCase() + city.slice(1)}</h2>
      <p>Hier findest du alle Veranstaltungen in {city}.</p>
      {/* Optional: weitere Inhalte oder Datenfetching für die Stadt */}
    </div>
  );
}

export default City;
