export type FormatInstructionsReturnValue = {
  text: string | null;
  warning: string | null;
  note: string | null;
};

export type TimeFormError = {
  low: string | null;
  high: string | null;
};

export type TimeFormValidation = {
  valid: boolean;
  error: TimeFormError;
};

export type WeightFormError = string | null;

export type WeightFormValidation = {
  valid: boolean;
  error: WeightFormError;
};
