import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "../Dashboard/styles";
import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable/>
    </Container>
  )
}