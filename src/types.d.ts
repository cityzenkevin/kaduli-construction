type DefaultProps = {
  customClass?: string;
};

const customClassDefaultProps = {
  customClass: "",
} as DefaultProps;

export interface Login {
  username: string;
  password: string;
}

export interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export type fields = {
  [key: string]: string | number;
};
