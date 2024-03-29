import { WizardStep } from '../models';

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

export const getPreviousStep = (currentStep: WizardStep): WizardStep => {
  switch (currentStep) {
    case 'LegalName':
      return WizardStep.LegalName;
    case 'DateOfBirth':
      return WizardStep.LegalName;
    case 'Address':
      return WizardStep.DateOfBirth;
    case 'ReviewAndSubmit':
      return WizardStep.Address;
    default:
      return WizardStep.LegalName;
  }
};

export const getNextStep = (currentStep: WizardStep): WizardStep => {
  switch (currentStep) {
    case WizardStep.LegalName:
      return WizardStep.DateOfBirth;
    case WizardStep.DateOfBirth:
      return WizardStep.Address;
    case WizardStep.Address:
      return WizardStep.ReviewAndSubmit;
    case WizardStep.ReviewAndSubmit:
      return WizardStep.Congratulations;
    default:
      return WizardStep.LegalName;
  }
};
