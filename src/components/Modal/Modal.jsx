import "./Modal.css";

function Modal({ setModalMessage, modalMessage }) {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <p>{modalMessage}</p>
        <button
          className="cta"
          onClick={() => {
            setModalMessage(null);
          }}
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default Modal;
