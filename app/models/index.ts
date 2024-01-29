type LegalName = {
  firstName: string;
  middleInitial: string;
  lastName: string;
};

export type Payload = {
  legalName: LegalName;
};

export enum WizardStep {
  LegalName = 'LegalName',
  Address = 'Address',
  DateOfBirth = 'DateOfBirth',
  ReviewAndSubmit = 'ReviewAndSubmit',
}
export enum StepState {
  Complete = 'Complete',
  NotStarted = 'NotStarted',
  Error = 'Error',
}

type Step = {
  title: WizardStep;
  state: StepState;
};
export type Wizard = {
  steps: Step[];
  isComplete: boolean;
  isCloseModalOpen: boolean;
  currentStep: WizardStep;
};
