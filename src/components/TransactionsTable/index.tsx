import { useEffect } from 'react';
import { Container } from './styles'

export function TransactionsTable() {

  useEffect(() => {
    fetch('https://localhost:3000/api/transactions')
      .then(response => response.json())
      .then(value => console.log(value))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/05/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1.100</td>
            <td>Casa</td>
            <td>10/05/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}