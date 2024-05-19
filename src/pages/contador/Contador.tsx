import { useState } from "react";

function Contador() {

  //valor guarda o valor e setvalor altera
  const [valor, setValor] = useState(0);

  /*nao podemos passar o setValor no onClick porque a função
   set so funciona dentro da função Contador, é como se fosse o escopo da função Contador
    ,e o return só trás o resultado,ou seja, o handleClick manipula e o return so mostra
    o resultado */
  function handleClick(){
    setValor(valor + 1);
  }

  // console.log("Variável valor: " + valor);

  return (
    <div>

      <h2>Componente Contador</h2>

      <p> O valor atual é: {valor}</p>

      <button onClick={handleClick}>Adicionar 1</button>

    </div>
  )
 
}

export default Contador