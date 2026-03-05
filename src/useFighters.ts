import { useState, useEffect } from "react";

export interface Fighter {
  id: number;
  name: string;
  weight_class: string;
  ranking: number;
  hype_score: number;
  image_url: string;
  country_code: string | null;
  record: string | null;
}

const API_URL = "http://127.0.0.1:8000/api/fighters";

export const useFighters = () => {
  const [fighters, setFighters] = useState<Fighter[]>([]);

  useEffect(() => {
    fetch(API_URL, {
      method: "GET",
      headers: { Accept: "application/json" },
    })
      .then((response) => response.json())
      .then((data) => setFighters(data))
      .catch((error) => console.error("Błąd pobierania danych:", error));
  }, []);

  const addHype = (id: number) => {
    fetch(`${API_URL}/${id}/hype`, {
      method: "PATCH",
      headers: { Accept: "application/json" },
    })
      .then((response) => response.json())
      .then((updatedFighter) => {
        setFighters((prevFighters) =>
          prevFighters.map((fighter) =>
            fighter.id === id ? updatedFighter : fighter,
          ),
        );
      })
      .catch((error) => console.error("Błąd podbijania hype'u:", error));
  };

  return { fighters, addHype };
};
