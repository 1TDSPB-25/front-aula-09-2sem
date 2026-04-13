import { useEffect, useState } from "react"
import { listaProdutos } from "../../data/listaProdutos";

export default function Produtos() {

useEffect(() => {
    console.log("CARREGADO");
  });

  useEffect(() => {
    listaProdutos.forEach(p=> console.log("PRODUTO : " + p.nome));
  },[]);

  const [contador, setContador] = useState(0)

  useEffect(()=>(
    console.log(`CONTADOR : ${contador}`)
  ),[contador]);
  
  return (
    <main>
      <h1>Produtos</h1>
      <div>
        <button onClick={()=> setContador(contador + 1)}>EXECUTE</button>
      </div>
    </main>
  )
}
