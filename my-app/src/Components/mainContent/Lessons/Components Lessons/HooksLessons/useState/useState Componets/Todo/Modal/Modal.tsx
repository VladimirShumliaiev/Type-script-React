import React, {FC} from 'react';
import style from './Modal.module.css'


type ModalProps = {
    closeModal: () => void
    handleDeleteTodo: () => void
    id: number
}


const Modal: FC<ModalProps> = ({closeModal, handleDeleteTodo}) => {

    return (
        <div className={style.modal} onClick={closeModal}>
            <div className={style.modal__content} onClick={event => event.stopPropagation()}>
                <div className={style.modal__header}>
                    <div className={style.modal__title}>
                        <h3> Delete </h3>
                    </div>
                </div>
                <div className={style.modal__body}>
                    <div>delete to-do ?</div>
                    <div> do you really want to delete to-do?</div>
                </div>

                <div className={style.modal__footer}>
                    <button onClick={handleDeleteTodo}>confirm</button>
                    <button onClick={closeModal}>
                        cancellation
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;