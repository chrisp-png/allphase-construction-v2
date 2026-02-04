import { createContext, useContext, useState, ReactNode } from 'react';

interface AssessmentModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const AssessmentModalContext = createContext<AssessmentModalContextType | undefined>(undefined);

export function AssessmentModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <AssessmentModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </AssessmentModalContext.Provider>
  );
}

export function useAssessmentModal() {
  const context = useContext(AssessmentModalContext);
  if (context === undefined) {
    throw new Error('useAssessmentModal must be used within an AssessmentModalProvider');
  }
  return context;
}
