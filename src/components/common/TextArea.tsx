/**
 * Common component text input with icons
 */

import { classNames } from '../../utils/styles';
import { MdError } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Size, State } from './TextInput';


/**
 * Maps the available sizes to label's styles
 */
const SIZE_LABEL_MAPS: Record<Size, string> = {
  [Size.SMALL]: 'text-sm',
  [Size.MEDIUM]: 'text-base font-medium',
  [Size.LARGE]: 'pl-2 text-2xl font-semibold'
}

/**
 * Maps the available sizes to input's styles
 */
const SIZE_INPUT_MAPS: Record<Size, string> = {
  [Size.SMALL]: 'text-sm p-2.5',
  [Size.MEDIUM]: 'text-base p-3',
  [Size.LARGE]: 'font-semibold text-xl p-3.5'
}

/**
 * Maps the available sizes to error message's styles
 */
const SIZE_ERROR_MESSAGE_MAPS: Record<Size, string> = {
  [Size.SMALL]: 'text-sm',
  [Size.MEDIUM]: 'text-base',
  [Size.LARGE]: 'font-semibold'
}

/**
 * Properties for the text input component
 */
interface TextAreaPropsI {
  validator?: [ (value: any) => boolean, string ];
  setIsValidForm?: (value: boolean) => void;
  name: string;
  label?: string;
  onInput: (e: any) => void;
  onFocusOut?: (e: any) => void;
  placeHolder?: string;
  state?: State;
  value: string | number;
  size?: Size
  error?: string;
  selectOnFocus?: boolean;
}

/**
 * Styles for the elements of the text input
 */
const stylesInput = {
  label: 'text-white mb-2',
  input: 'bg-formBG text-white rounded-lg focus:outline-none border border-darkLine focus:border-primary focus:border'
}

export const TextArea = ({
                            name, label, value, placeHolder, onInput, validator, setIsValidForm, error,
                            onFocusOut, size = Size.MEDIUM, state = State.ENABLE, selectOnFocus = false,
                          }: TextAreaPropsI) => {
  const {t} = useTranslation();

  const [ isValid, setIsValid ] = useState(true);

  const handleFocus = (event: any) => {
    if(selectOnFocus){
      event.target.select();
    }
  }

  /**
   * Effect for execute the validations in the text field
   */
  useEffect(() => {
    setIsValid(validator !== undefined && validator[0](value));
    if(setIsValidForm !== undefined) {
      setIsValidForm(isValid);
    }
  }, [ value, validator, isValid, setIsValidForm ]);

  return (
    <div>
      <div className={classNames('flex flex-col relative mt-4')}>
        {
          /* Show label */
          label &&
          (<label className={classNames(stylesInput.label, SIZE_LABEL_MAPS[size])} htmlFor={name}>
            {label}
          </label>)
        }


        {/* Show input */}
        <textarea
          className={classNames(stylesInput.input, SIZE_INPUT_MAPS[size])}
          onInput={onInput}
          onBlur={onFocusOut}
          value={value}
          name={name}
          id={name}
          disabled={state === State.DISABLE}
          onFocus={handleFocus}
          placeholder={placeHolder}/>
      </div>
      {
        /* Show props error */
        error
        && (<p className={classNames('pt-2 text-red flex flex-row items-center', SIZE_ERROR_MESSAGE_MAPS[size])}>
          <MdError className={classNames('text-red mr-2', SIZE_ERROR_MESSAGE_MAPS[size])}/>
          {t(error)}
        </p>)
      }
      {
        /* Show validators error */
        !error && (validator !== undefined && !validator[0](value))
        && (<p className={classNames('pt-2 text-red flex flex-row items-center', SIZE_ERROR_MESSAGE_MAPS[size])}>
          <MdError className={classNames('text-red mr-2', SIZE_ERROR_MESSAGE_MAPS[size])}/>
          {validator[1]}
        </p>)
      }
    </div>
  )
}