import { ToastType } from "../services/toast.service";

export interface Toast {
    id: number;
    type: ToastType;
    message: string;
    timeout: number;
}
