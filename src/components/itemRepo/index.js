import { ItemContainer } from "./styles";

function ItemRepo({repo, handleRemoveRepo}) {
  
  const handleRemoveClick = () => {
    // Chama a função handleRemoveRepo passando o ID do repositório
    handleRemoveRepo(repo.id);
  }

  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} target='_blank' rel='noreferrer'>
        Ver Repositorio
      </a>
      <br/>
      <a href="#" className="remover" onClick={handleRemoveClick} rel='noreferrer'>
        Remover
      </a>
      <hr />
    </ItemContainer>
  );
}

export default ItemRepo;