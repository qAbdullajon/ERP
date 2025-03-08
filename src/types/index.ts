export interface ParamsType {
    search: string;
    page: number;
    total: number;
    pageSize: number
  }
  export interface ModalProps {
    open: boolean;
    update?: any;
    handleCancel: () => void;
  }