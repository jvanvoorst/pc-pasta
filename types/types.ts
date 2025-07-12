export type FormatInstructionsReturnValue = {
  text: string | null;
  warning: string | null;
  note: string | null;
};

export type TimeFormError = {
  low: string | null;
  high: string[];
};

export type TimeFormValidation = {
  valid: boolean;
  error: TimeFormError;
};
