import Modal from "react-modal";
import { FormEvent, useState } from "react";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { api } from "../../services/api";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal(props: NewTransactionModalProps) {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit');

  function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault()
    const data = {
      title,
      value,
      category,
      type
    };

    api.
  }

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button"
        onClick={props.onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>
        <input
          placeholder="Título"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={e => setValue(Number(e.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Cetegoria"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}