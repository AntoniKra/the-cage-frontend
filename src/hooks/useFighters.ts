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
    const fetchFighters = async () => {
      try {
        const response = await fetch(API_URL, {
          method: "GET",
          headers: { Accept: "application/json" },
        });
        if (!response.ok) {
          throw new Error(`Błąd HTTP! Status: ${response.status}`);
        }
        const data = await response.json();
        setFighters(data);
      } catch (error) {
        console.error("Błąd pobierania danych:", error);
      }
    };

    fetchFighters();
  }, []);

  const addHype = async (id: number) => {
    try {
      const response = await fetch(`${API_URL}/${id}/hype`, {
        method: "PATCH",
        headers: { Accept: "application/json" },
      });
      if (!response.ok) {
        throw new Error(`Błąd HTTP! Status: ${response.status}`);
      }
      const updatedFighter = await response.json();

      setFighters((prevFighters) =>
        prevFighters.map((fighter) =>
          fighter.id === id ? updatedFighter : fighter,
        ),
      );
    } catch (error) {
      console.error("Błąd podbijania hype'u:", error);
    }
  };

  return { fighters, addHype };
};
