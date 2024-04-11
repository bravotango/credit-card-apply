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
