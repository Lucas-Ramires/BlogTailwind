import { useEffect, useState } from "react"

function Tarefa() {

  const [completed, setCompleted] = useState(false);
  const [tarefa, setTarefa] = useState('');

  useEffect(() => {
    if (completed) {
      setTarefa('Parabéns! Tarefa Concluída!')
    }else{
      setTarefa('')
    }
  }, [completed])

  console.log("Completed: " + completed);

  return (
    <div>
      <h2>Componente Tarefa</h2>

      <h3>{tarefa}</h3>

      <h4>Conclua a tarefa</h4>

      <button onClick={() => setCompleted(!completed)}>Concluir Tarefa</button>
    </div>
  )
}

export default Tarefa