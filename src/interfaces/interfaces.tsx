export interface IStep {
  formId: string;
  stepNumber: number;
  stepTitle: string;
  complete: boolean;
}

export type InputEvent = React.ChangeEvent<HTMLInputElement>;
export type ButtonEvent = React.MouseEvent<HTMLButtonElement>;
export type SubmitEvent = React.FormEvent<HTMLButtonElement>;
