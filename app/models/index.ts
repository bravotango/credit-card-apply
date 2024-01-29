type LegalName = {
  firstName: string;
  middleInitial: string;
  lastName: string;
};

export type Payload = {
  legalName: LegalName;
};

export enum WizardSteps {
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
  title: WizardSteps;
  state: StepState;
};
export type Wizard = {
  steps: Step[];
  isComplete: boolean;
  isCloseModalOpen: boolean;
  currentStep: WizardSteps;
};
