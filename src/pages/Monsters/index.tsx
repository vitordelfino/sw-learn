import React from "react";
import { Helmet } from "react-helmet";
import { usePaginatedQuery } from "react-query";
import Button from "../../components/Button";
import MonsterCard from "../../components/MonsterCard";
import { useMontersPagination } from "../../context/monters-pagination";
import { Monster } from "../../helpers/types";
import api from "../../services/api";
import { MonsterList, MonstersPage, Pagination } from "./styles";

const Monsters = () => {

  const { next, previous, page } = useMontersPagination();

  const fetchMonsters = async () => {
    const response = await api.get(`/monsters?page=${page}&page_size=30`);
    return response.data.results.map((monster: any) => ({
      name: monster.name,
      image: `https://swarfarm.com/static/herders/images/monsters/${monster.image_filename}`,
      id: monster.id,
    }));
  };

  const {
    isLoading,
    isError,
    resolvedData: monsters,
    isFetching,
  } = usePaginatedQuery<Monster[]>(["monsters", page], fetchMonsters, {
    staleTime: Infinity,
  });

  return (
      <MonstersPage>
        <Helmet>
          <title>Monsters</title>
        </Helmet>
        <h1>Monsters</h1>
        {isLoading && <span>Loading...</span>}
        {isError && <span>Houve algum erro !</span>}
        {monsters && (
          <>
            <MonsterList>
              {monsters?.map((monster, i) => (
                <MonsterCard
                  key={i}
                  image={monster.image}
                  name={monster.name}
                  id={monster.id}
                />
              ))}
            </MonsterList>
            {isFetching && <span>Carregando...</span>}
            <Pagination>
              <Button onClick={previous}>Anterior</Button>
              <Button onClick={next}>Próximo</Button>
            </Pagination>
          </>
        )}
      </MonstersPage>
  );
};

export default Monsters;
