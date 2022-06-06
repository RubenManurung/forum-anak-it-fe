import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { RootContainer, ModalContentContainer, ModalHeader } from "./style";

const Modal = (props) => {
  const { open, onClose, title, children } = props;

  const handleCloseModal = () => {
    onClose();
  };

  return (
    <RootContainer open={open}>
      <ModalContentContainer>
        <button
          onClick={handleCloseModal}
          style={{
            cursor: "pointer",
            position: "absolute",
            top: -15,
            right: -10,
            border: "none",
            padding: 4,
            background: "#FF5F2D",
          }}
        >
          <FontAwesomeIcon
            icon={faTimes}
            width={15}
            height={15}
            style={{
              cursor: "pointer",
              color: "#fff",
            }}
          />
        </button>
        <ModalHeader>
          <h2 style={{ margin: 0, color: "#3C3C3C" }}>{title}</h2>
        </ModalHeader>
        {children}
      </ModalContentContainer>
    </RootContainer>
  );
};

export default Modal;
