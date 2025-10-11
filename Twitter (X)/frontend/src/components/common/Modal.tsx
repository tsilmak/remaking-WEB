import React, { useRef } from "react";
import { CloseIcon, GoBackIcon, XLogo } from "@/utils/icons";

interface ModalProps {
  isModal: boolean;
  onClose: () => void;
  children: React.ReactNode;
  footer?: React.ReactNode;
  showCloseButton?: boolean;
  showBackButton?: boolean;
  contentClassName?: string;
  footerClassName?: string;
}

const Modal: React.FC<ModalProps> = ({
  isModal,
  onClose,
  children,
  footer,
  showCloseButton = true,
  showBackButton = false,
  contentClassName = "px-8 md:px-20 pb-72 md:pb-28",
  footerClassName = "px-12 md:px-20 pb-6 md:pb-12",
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "Tab") return;

    const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (!focusableElements || focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey) {
      // Shift + Tab: moving backwards
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    } else {
      // Tab: moving forwards
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50" onKeyDown={handleKeyDown}>
      <div
        className={`absolute inset-0 ${
          isModal ? "dark:bg-black/50 bg-black/40" : "dark:bg-black bg-white"
        } transition-colors duration-300`}
        onClick={(e) => e.stopPropagation()}
        aria-hidden="true"
      />
      <div className="flex items-center justify-center h-full">
        <div
          ref={modalRef}
          className="relative dark:bg-black bg-white md:border border-borderColor rounded-2xl w-full md:w-[600px] min-h-full md:min-h-[650px] md:max-h-[90vh] md:max-w-2xl md:mx-4 z-10 flex flex-col justify-between"
        >
          {showCloseButton && (
            <button
              onClick={onClose}
              className="absolute top-4 left-2 rounded-full p-2.5 hover:bg-hoverOverlay dark:hover:bg-gray-800/50"
            >
              <CloseIcon
                width="20"
                height="20"
                fill="fill-black dark:fill-white"
              />
            </button>
          )}
          {showBackButton && (
            <button
              onClick={onClose}
              className="absolute top-2 left-2 rounded-full p-2 hover:bg-hoverOverlay dark:hover:bg-gray-800/50"
            >
              <GoBackIcon
                width="20"
                height="20"
                fill="fill-black dark:fill-white"
              />
            </button>
          )}
          <div className="flex justify-center mt-4">
            <XLogo width="32" height="32" fill="fill-black dark:fill-white" />
          </div>
          <div className={contentClassName}>{children}</div>
          {footer && <div className={footerClassName}>{footer}</div>}
        </div>
      </div>
    </div>
  );
};

export default Modal;
