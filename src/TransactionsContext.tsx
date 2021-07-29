import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionProviderProps {
  children: ReactNode
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionProvider(props: TransactionProviderProps){
  const [transactions, setTransaction] = useState<Transaction[]>([])


  useEffect(() => {
    api.get('/transactions')
      .then(response => setTransaction(response.data.transactions))
  }, [])

  function createTransaction(transaction: TransactionInput){
    api.post('/transactions', transaction)
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {props.children}
    </TransactionContext.Provider>
  )
}