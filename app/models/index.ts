type LegalName = {
  firstName: string;
  middleInitial: string;
  lastName: string;
};

export type Payload = {
  legalName: LegalName;
  address: string;
  dateOfBirth: string;
};

export enum WizardStep {
  LegalName = 'LegalName',
  DateOfBirth = 'DateOfBirth',
  Address = 'Address',
  ReviewAndSubmit = 'ReviewAndSubmit',
  Congratulations = 'Congratulations',
}
export enum StepState {
  Complete = 'Complete',
  NotStarted = 'NotStarted',
  Started = 'Started',
  Error = 'Error',
}
export enum TransitionDirection {
  None = '',
  SlideLeft = 'slide-left',
  SlideRight = 'slide-right',
}

export type Step = {
  title: WizardStep;
  state: StepState;
  isFirstStep: boolean;
};
export type Wizard = {
  steps: Step[];
  isComplete: boolean;
  isCloseModalOpen: boolean;
  currentStep: WizardStep;
  transitionDirection: TransitionDirection;
};
