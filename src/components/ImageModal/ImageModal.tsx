import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { ImageModalProps } from "../App.types";

const ImageModal: React.FC<ImageModalProps> = ({ modalImage, closeModal, modalIsOpen }) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className={css.contentStyle}
        style={{
          overlay: {
            backgroundColor: "rgba(35, 31, 31, 0.8)",
          },
        }}
      >
        <div className={css.modalWindow}>
          <img
            src={modalImage.url}
            alt={modalImage.altDescription}
            className={css.modalImage}
          />

          <div className={css.modalContent}>
            <p className={css.modalDescription}>{modalImage.description}</p>
            <p className={css.modalAuthor}>Author: {modalImage.author}</p>
            <p className={css.modalImage}>
              Likes: <span className={css.likesAccent}>{modalImage.likes}</span>
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;