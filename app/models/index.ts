type LegalName = {
  firstName: string;
  middleInitial: string;
  lastName: string;
};

export type Payload = {
  legalName: LegalName;
};

enum StepState {
  Complete = 'Complete',
  Error = 'Error',
}

type Step = {
  title: string;
  state: StepState;
};
export type Wizard = {
  steps: Step[];
};
