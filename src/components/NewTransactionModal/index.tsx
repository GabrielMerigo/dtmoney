import Modal from "react-modal";
import { Container } from "./styles";
import closeImg from '../../assets/close.svg'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal(props: NewTransactionModalProps) {
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

      <Container>
        <h2>Cadastrar Transação</h2>
        <input
          placeholder="Título"
        />

        <input
          type="number"
          placeholder="Valor"
        />

        <input
          placeholder="Cetegoria"
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}