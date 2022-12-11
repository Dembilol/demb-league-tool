import React, { useState, useEffect } from "react";
import axios from "axios";

const RiotApiKey = "RGAPI-25ce46f8-a5cf-468e-881e-b49f0caf8b17";

const Champion = ({ champion }) => {
  // Fetch the champion's icon from the Riot API
  const [championIcon, setChampionIcon] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://ddragon.leagueoflegends.com/cdn/<VERSION>/data/en_US/champion/${champion.id}.json`
      )
      .then((response) => {
        const championData = response.data;
        const iconUrl = `https://ddragon.leagueoflegends.com/cdn/<VERSION>/img/champion/${championData.image.full}`;
        setChampionIcon(iconUrl);
      });
  }, []);

  return (
    <div>
      {championIcon && (
        <img src={championIcon} alt={`${champion.name} icon`} />
      )}
      {champion.name}
    </div>
  );
};

export default Champion;