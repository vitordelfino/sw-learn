import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Monster } from "../../helpers/types";
import api from "../../services/api";

const MonsterPage = () => {
  const { id } = useParams<{ id: string }>();
  const fetchMonster = async () => {
    const response = await api.get(`/monsters/${id}`);
    return {
      ...response.data,
      image:  `https://swarfarm.com/static/herders/images/monsters/${response.data.image_filename}`,
    }
  };

  const { isLoading, isError, data: monster } = useQuery<Monster>(
    `monster/${id}`,
    fetchMonster,
    {
      staleTime: Infinity,
    }
  );

  return (<>
    {isLoading && <span>carregando...</span>}
    {isError && <span>Houve um erro !</span>}
    {monster && (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span>{monster.name}</span>
        <span>{monster.element}</span>
      </div>
    )}
  </>);
};

export default MonsterPage;
