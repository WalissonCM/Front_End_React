import Pagina from '../components/Pagina';
const array = () => {

  const carros = ['Civic','Tucson','Celta','Tenpra','Marea','Doblo'];
  
  
  return (
    
      <Pagina titulo="Array">
    
        <h1>Lista ordenada</h1>
        <ol>
        {carros.map(item => (<li>{item}</li>))}
        </ol>  
       
      </Pagina>  
  )
}

export default array