import { Backdrop, ModalWrapper, CloseBtn, CloseIcon } from "./Modal.styled"
import { useEffect } from "react"

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    const closeOnEsc = (event) => {
      if (event.code === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", closeOnEsc);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", closeOnEsc);
    }
  }, [isOpen, onClose]);

  const  closeOnBackdrop = (event) => {
    if (isOpen && event.target === event.currentTarget) {
      onClose();
    }
  };

  const closeOnBtn = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Backdrop onClick={closeOnBackdrop}>
      <ModalWrapper>
        <CloseBtn onClick={closeOnBtn}>
          <CloseIcon/>
        </CloseBtn>
        {children}
      </ModalWrapper>
    </Backdrop>

  );
};

export default Modal;
