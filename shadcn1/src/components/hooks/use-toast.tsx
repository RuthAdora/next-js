// src/components/hooks/use-toast.tsx (or .js)
import { useState, useCallback } from "react";

interface Toast {
  id: number;
  message: string;
  type?: "success" | "error" | "warning" | "info";
  duration?: number;
}

function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const dismissToast = useCallback(
    (id: number) => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    },
    [setToasts]
  );
  const showToast = useCallback(
    (message: string, options: Omit<Toast, "id" | "message"> = {}) => {
      const id = Date.now();
      const newToast: Toast = { id, message, ...options };
      setToasts((prevToasts) => [...prevToasts, newToast]);

      // Automatically remove the toast after a certain duration (default 3 seconds)
      const duration = options.duration || 3000;
      setTimeout(() => {
        dismissToast(id);
      }, duration);
    },
    [setToasts, dismissToast]
  );

  return {
    toasts, // Array of currently displayed toasts
    showToast, // Function to add a new toast
    dismissToast, // Function to remove a specific toast
  };
}

export default useToast;
