import React from 'react';
import './BackCall.less';
import { useForm } from "react-hook-form";
import { useTranslation } from 'react-i18next';

function BackCall() {
  const {t}= useTranslation()
  const { register, 
    formState: { errors, isValid }, 
    handleSubmit, 
    reset 
  } = useForm({
    mode: 'onBlur'
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  const validateTrim = (value) => {
    if (value.trim() === '') {
      return t('errors.empty');
    }
    return true;
  };

  return (
    <div className="backCall-container">
      <h1 className="backCall-title">{t('back_call.title')}</h1>
      <form className="backCall-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="backCall-inputWrapper">
          <label className='backCall-label'>
            <input
              {...register('name', {
                required: t('errors.name'),
                validate: validateTrim
              })}
              className="backCall-input"
              placeholder={t('back_call.ph_name')}
            />
            {errors?.name && <p className='backCall-errors'>{errors?.name?.message || 'error!'}</p>}
          </label>
          <label className='backCall-label'>
            <input
              {...register('phone', {
                required: t('errors.phone'),
                pattern: {
                  value: /^(?:(?:\+|00)420\s?)?\d{3}\s?\d{3}\s?\d{3}$/,
                  message: t('errors.phoneInvalid')
                },
                validate: validateTrim
              })}
              className="backCall-input"
              placeholder={t('back_call.ph_phone')}
            />
            {errors?.phone && <p className='backCall-errors'>{errors?.phone?.message || 'error!'}</p>}
          </label>
        </div>
        <button className="backCall-button" type="submit" disabled={!isValid}>
          {t('back_call.button')}
        </button>
      </form>
    </div>
  );
}

export default BackCall;

