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

interface TransactionProviderProps {
  children: ReactNode
} 

export const TransactionContext = createContext<Transaction[]>([]);

export function TransactionProvider(props: TransactionProviderProps){
  const [transactions, setTransaction] = useState<Transaction[]>([])


  useEffect(() => {
    api.get('/transactions')
      .then(response => setTransaction(response.data.transactions))
  }, [])

  return (
    <TransactionContext.Provider value={transactions}>
      {props.children}
    </TransactionContext.Provider>
  )
}