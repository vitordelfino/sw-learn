import React from "react";
import { Link } from "react-router-dom";

import { MonsterCard as Card } from "./styles";

type MonsterProps = {
  image: string;
  name: string;
  id: number
};

const MonsterCard: React.FC<MonsterProps> = ({ image, name, id }) => {
  return (
    <Link to={`/monster/${id}`} style={{ textDecoration: 'none' }}>
      <Card className="monster-card" image={image}>
        <div className="monster-image" />

        <div className="monster-name">
          <span>{name}</span>
        </div>
      </Card>
    </Link>
  );
};

export default MonsterCard;
