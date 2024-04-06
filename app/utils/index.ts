import { WizardStepTitle } from '../models';

export const stringReplace = (
  textString: string,
  replacements: Record<string, string>
): string => {
  let result = textString;

  Object.entries(replacements).forEach(([placeholder, value]) => {
    const regex = new RegExp(`{${placeholder}}`, 'g');
    result = result.replace(regex, value);
  });

  return result;
};

export const getPreviousStep = (
  currentStep: WizardStepTitle
): WizardStepTitle => {
  switch (currentStep) {
    case WizardStepTitle.LegalName:
      return WizardStepTitle.LegalName;
    case WizardStepTitle.DateOfBirth:
      return WizardStepTitle.LegalName;
    case WizardStepTitle.Address:
      return WizardStepTitle.DateOfBirth;
    case WizardStepTitle.ReviewAndSubmit:
      return WizardStepTitle.Address;
    default:
      return WizardStepTitle.LegalName;
  }
};

export const getNextStep = (currentStep: WizardStepTitle): WizardStepTitle => {
  switch (currentStep) {
    case WizardStepTitle.LegalName:
      return WizardStepTitle.DateOfBirth;
    case WizardStepTitle.DateOfBirth:
      return WizardStepTitle.Address;
    case WizardStepTitle.Address:
      return WizardStepTitle.ReviewAndSubmit;
    case WizardStepTitle.ReviewAndSubmit:
      return WizardStepTitle.Congratulations;
    default:
      return WizardStepTitle.LegalName;
  }
};
