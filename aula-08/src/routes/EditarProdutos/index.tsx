import { useParams } from "react-router-dom"

//Utilizando type para garantir que o id seja do tipo string:
type TipoString = {
  id: string;
}


export default function EditarProdutos() {

  //Realizando um destructuring para pegar o id da url:
  //Utilizando o tipo TipoString para garantir que o id seja do tipo string:
  const { id } = useParams<TipoString>();
  console.log(`ID do produto a ser editado: ${id}`);


  return (
    <main>
        <h1>Editar Produtos</h1>
        <p>ID do produto: {id}</p>
    </main>
  )
}
 