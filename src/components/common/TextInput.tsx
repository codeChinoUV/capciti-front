/**
 * Common component text input with icons
 */

import { classNames } from '../../utils/styles';
import { MdError } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Indicate the type of text input
 */
export enum Type {
  TEXT,
  PASSWORD,
  NUMBER
}

/**
 * Indicate the size of the field
 */
export enum Size {
  SMALL,
  MEDIUM,
  LARGE
}

/**
 * Indicate the state of the input field
 */
export enum State {
  ENABLE,
  DISABLE
}

/**
 * Maps the available sizes to label's styles
 */
const SIZE_LABEL_MAPS: Record<Size, string> = {
  [Size.SMALL]: 'text-sm',
  [Size.MEDIUM]: 'text-base font-medium',
  [Size.LARGE]: 'pl-2 text-2xl font-semibold'
}

/**
 * Maps the available sizes to icon's styles
 */
const SIZE_ICON_MAPS: Record<Size, string> = {
  [Size.SMALL]: 'text-xl bottom-2.5  left-3',
  [Size.MEDIUM]: 'text-2xl bottom-3 left-2.5',
  [Size.LARGE]: 'text-3xl bottom-3.5 left-2'
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
interface TextInputPropsI {
  validator?: [ (value: any) => boolean, string ];
  setIsValidForm?: (value: boolean) => void;
  name: string;
  label?: string;
  onInput: (e: any) => void;
  onFocusOut?: (e: any) => void;
  placeHolder?: string;
  state?: State;
  value: string | number;
  icon?: any;
  type?: Type;
  size?: Size
  error?: string;
  selectOnFocus?: boolean;
}

/**
 * Styles for the elements of the text input
 */
const stylesInput = {
  label: 'text-primary mb-2',
  icon: 'text-primary absolute',
  inputWitIcon: 'pl-12',
  input: 'bg-gray text-primary shadow-soft rounded-lg focus:outline-none focus:border-primary focus:border'
}

export const TextInput = ({
                            name, label, value, placeHolder, icon: Icon, onInput, validator, setIsValidForm, error,
                            onFocusOut, type = Type.TEXT, size = Size.MEDIUM, state = State.ENABLE, selectOnFocus = false,
                          }: TextInputPropsI) => {
  const {t} = useTranslation();

  const [ isValid, setIsValid ] = useState(true);

  const handleFocus = (event: any) => {
    if(selectOnFocus){
      event.target.select();
    }
  }

  const callsToOnInput = (e: any) => {
    if(type === Type.NUMBER) {
      // @ts-ignore
      if(!isNaN(e.target.value)) {
        onInput(e);
      }
    } else {
      onInput(e);
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
      <div className={classNames('flex flex-col relative')}>
        {
          /* Show label */
          label &&
          (<label className={classNames(stylesInput.label, SIZE_LABEL_MAPS[size])} htmlFor={name}>
            {label}
          </label>)
        }

        {
          /* Show icon */
          Icon &&
          (
            <Icon className={classNames(stylesInput.icon, SIZE_ICON_MAPS[size])}/>
          )
        }

        {/* Show input */}
        <input
          className={classNames(stylesInput.input, Icon && stylesInput.inputWitIcon, SIZE_INPUT_MAPS[size])}
          type={type === Type.PASSWORD ? 'password' : 'text'}
          onInput={callsToOnInput}
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