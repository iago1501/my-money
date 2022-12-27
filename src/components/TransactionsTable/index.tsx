import { useTransactions } from "../../hooks/useTransactions";
import { formatCurrency } from "../../utils";
import { Container } from "./styles";

export function TransactionsTable() {

  const {transactions} = useTransactions()

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
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}> 
              {formatCurrency(transaction.value)}</td>

              <td>{transaction.category}</td>
              <td>{new Intl.DateTimeFormat('pt-BR').format(transaction.value)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
