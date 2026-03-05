import { useEffect, useState } from "react";

interface Fighter {
  id: number;
  name: string;
  weight_class: string;
  ranking: number;
  hype_score: number;
  image_url: string;
  country_code: string | null;
  record: string | null;
}

function App() {
  const [fighters, setFighters] = useState<Fighter[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/fighters", {
      method: "GET",
      headers: {
        Accept: `application/json`,
      },
    })
      .then((response) => response.json())
      .then((data) => setFighters(data))
      .catch((error) => console.error("Błąd pobierania danych:", error));
  }, []);

  const dodajHype = (id: number) => {
    fetch(`http://127.0.0.1:8000/api/fighters/${id}/hype`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((zaktualizowanyZawodnik) => {
        setFighters(
          fighters.map((fighter) =>
            fighter.id === id ? zaktualizowanyZawodnik : fighter,
          ),
        );
      })
      .catch((error) => console.error("Błąd podbijania hype'u:", error));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Hype Cage - Lista Zawodników 🥊</h1>

      <ul>
        {fighters.map((fighter) => (
          <li key={fighter.id} style={{ margin: "10px 0" }}>
            <strong>{fighter.name}</strong> ({fighter.weight_class}) - Ranking:{" "}
            {fighter.ranking} | Hype: {fighter.hype_score}
            <button
              onClick={() => dodajHype(fighter.id)}
              style={{
                marginLeft: "15px",
                cursor: "pointer",
                padding: "5px 10px",
              }}
            >
              🔥 Daj Hype!
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
