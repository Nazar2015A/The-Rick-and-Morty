import { useState } from "react";

export const useModal = (initialValue: boolean = false) => {
  const [isModal, setIsModal] = useState<boolean>(initialValue || false);

  const toggleModal = () => {
    setIsModal((prev) => !prev);
  };
  const closeModal = () => {
    setIsModal(false);
  };
  const openModal = () => {
    setIsModal(true);
  };

  return {
    isModal,
    openModal,
    closeModal,
    toggleModal,
  };
};
