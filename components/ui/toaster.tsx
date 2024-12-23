'use client';

import { useToast } from '@/hooks/use-toast';
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
} from '@/components/ui/toast';

export function Toaster() {
  const { toast } = useToast();

  return (
    <ToastProvider>
      {(Object.keys(toast) as Array<keyof typeof toast>).map((key) => (
        <Toast key={key}>
          <ToastTitle>{key}</ToastTitle>
          <ToastDescription>{toast[key]("Sample message")}</ToastDescription>
          <ToastClose />
        </Toast>
      ))}
    </ToastProvider>
  );
}
