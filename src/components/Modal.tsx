import { forwardRef, ReactNode, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  children: ReactNode;
}

export interface ModalRef {
  showModal: () => void;
}

const Modal = forwardRef<ModalRef, ModalProps>(({ children }, ref) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    showModal() {
      dialogRef.current?.showModal();
    },
  }));

  return createPortal(
    <dialog ref={dialogRef}>
      {children}
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal-root')! as HTMLDivElement
  );
});

export default Modal;
