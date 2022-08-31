import { PRODUCT_FORM_INPUT_NAMES } from '@/constants/constants';

const checkisUrlValid = (url) => {
  try {
    url = new URL(url);
  } catch (_) {
    return false;
  }
  return url.protocol === 'https:' || url.protocol === 'http:';
};

const validateForm = (formValues) => {
  let errors = {};

  Object.entries(formValues).forEach((entry) => {
    const [fieldName, fieldValue] = entry;

    switch (fieldName) {
      case PRODUCT_FORM_INPUT_NAMES.TITLE:
      case PRODUCT_FORM_INPUT_NAMES.BRAND:
        if (fieldValue.trim().length === 0) {
          errors[fieldName] = 'Field is required';
        } else if (fieldValue.trim().length < 3) {
          errors[fieldName] = 'Value cannot be less than 3 characters';
        }
        break;
      case PRODUCT_FORM_INPUT_NAMES.CATEGORIE:
        if (fieldValue && fieldValue.trim().length < 3) {
          errors[fieldName] = 'Value must be greater than 3 characters';
        }
        break;
      case PRODUCT_FORM_INPUT_NAMES.PRICE:
        if (Number(fieldValue) <= 0) {
          fieldValue === ''
            ? (errors[fieldName] = 'value must be a number')
            : (errors[fieldName] = 'value must be greater than 0');
        }
        break;
      case PRODUCT_FORM_INPUT_NAMES.IMG:
        if (!checkisUrlValid(fieldValue)) {
          errors[fieldName] = 'Please, enter a url';
        }
        break;
      case PRODUCT_FORM_INPUT_NAMES.DESCRIPTION:
        if (fieldValue.trim().length > 255) {
          errors[fieldName] = 'Value cannot be greater than 255 characters';
        }
        break;
      default:
    }
  });
  return errors;
};

export default validateForm;
