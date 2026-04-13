
export default function Cabecalho() {
  return (
     <header className="flex flex-col h-[20vh] bg-amber-800 text-amber-50">
        <h1 className="text-center">Minha Aplicação</h1>
        <nav>
          <a href="/">Home</a> | 
          <a href="/produtos"> Produtos</a>
        </nav>
       </header>
  )
}
