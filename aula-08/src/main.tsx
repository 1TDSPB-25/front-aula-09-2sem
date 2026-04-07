import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

//Importando os componentes de rotas:
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './routes/Home/index.tsx'
import Produtos from './routes/Produtos/index.tsx'
import EditarProdutos from './routes/EditarProdutos/index.tsx'
import Error from './routes/Error/index.tsx'
import "./globals.css"

//Criando um pool de rotas:
const router = createBrowserRouter([{
  path: "/", element: <App/>, errorElement: <Error/>, children:
  [
    {path: "/", element: <Home/>},
    {path: "/produtos", element: <Produtos/>},
    {path: "/editar-produtos/:id", element: <EditarProdutos/>},  
  ]
}]); 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
