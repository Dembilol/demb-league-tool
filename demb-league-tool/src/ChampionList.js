import React, { useState, useEffect } from "react";
import axios from "axios";
import Champion from "./Champion";

const RiotApiKey = "RGAPI-25ce46f8-a5cf-468e-881e-b49f0caf8b17";

const ChampionList = () => {
  // Fetch the list of champions from the Riot API
  const [champions, setChampions] = useState([]);
  useEffect(() => {
    axios
      .get("https://ddragon.leagueoflegends.com/cdn/<VERSION>/data/en_US/champion.json")
      .then((response) => {
        const championData = response.data;
        const champions = Object.values(championData.data);
        champions.sort((a, b) => (a.name > b.name ? 1 : -1));
        setChampions(champions);
      });
  }, []);

  return (
    <div>
      {champions.map((champion) => (
        <Champion key={champion.id} champion={champion} />
      ))}
    </div>
  );
};

export default ChampionList;