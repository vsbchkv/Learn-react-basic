import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Button from '@/components/common/Button/Button';
import Input from '@/components/common/Input/Input';
import {
  PRODUCT_FORM_INPUT_NAMES,
  REQUIRED_FIELDS,
} from '@/constants/constants';

import validateForm from './productFormValidation';

const ProductEdit = ({ submitBtnText, onConfirm, initialValues = {} }) => {
  const [inputValues, setInputValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const isRequiredFields = REQUIRED_FIELDS.every((key) => key in inputValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBlur = () => {
    const errors = validateForm(inputValues);
    setFormErrors(errors);
  };

  const submitDisabled = !isRequiredFields || !!Object.keys(formErrors).length;

  return (
    <form
      name='product-edit'
      className='product-edit'
      onSubmit={(e) => {
        e.preventDefault();
        onConfirm(inputValues);
      }}
      noValidate
    >
      <Input
        name={PRODUCT_FORM_INPUT_NAMES.TITLE}
        value={inputValues.title}
        required
        onChange={handleInputChange}
        onBlur={handleBlur}
        errors={formErrors}
        classExtra='product__input'
      />
      <Input
        name={PRODUCT_FORM_INPUT_NAMES.BRAND}
        value={inputValues.brand}
        required
        onChange={handleInputChange}
        onBlur={handleBlur}
        errors={formErrors}
        classExtra='product__input'
      />
      <Input
        name={PRODUCT_FORM_INPUT_NAMES.CATEGORIE}
        value={inputValues.categorie}
        onChange={handleInputChange}
        onBlur={handleBlur}
        errors={formErrors}
        classExtra='product__input'
      />
      <Input
        name={PRODUCT_FORM_INPUT_NAMES.PRICE}
        type='number'
        min='0'
        required
        value={inputValues.price}
        onChange={handleInputChange}
        onBlur={handleBlur}
        errors={formErrors}
        classExtra='product__input'
      />
      <Input
        name={PRODUCT_FORM_INPUT_NAMES.IMG}
        type='url'
        value={inputValues.img}
        onChange={handleInputChange}
        onBlur={handleBlur}
        errors={formErrors}
        classExtra='product__input'
      />
      <Input
        name={PRODUCT_FORM_INPUT_NAMES.DESCRIPTION}
        textarea
        value={inputValues.description}
        onChange={handleInputChange}
        onBlur={handleBlur}
        errors={formErrors}
        classExtra='product__input'
      />
      <Button classExtra='product-edit__submit' disabled={submitDisabled}>
        {submitBtnText}
      </Button>
    </form>
  );
};

ProductEdit.propTypes = {
  submitBtnText: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
};

export default ProductEdit;
