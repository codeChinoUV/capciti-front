import { Multiselect } from 'multiselect-react-dropdown';
import { Size, State } from './TextInput';
import { classNames } from '../../utils/styles';
import { MdError } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

/**
 * Maps the available sizes to input's styles
 */
const SIZE_MULTI_SELECT_MAPS: Record<Size, string> = {
  [Size.SMALL]: 'text-sm',
  [Size.MEDIUM]: 'text-base p-1',
  [Size.LARGE]: 'font-semibold text-xl p-2'
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
 * Maps the available sizes to error message's styles
 */
const SIZE_ERROR_MESSAGE_MAPS: Record<Size, string> = {
  [Size.SMALL]: 'text-sm',
  [Size.MEDIUM]: 'text-base',
  [Size.LARGE]: 'font-semibold'
}

const MULTI_SELECT_STYLES = 'bg-formBG text-white rounded-lg focus:outline-none border border-darkLine ' +
  'focus:border-primary focus:border';

interface MultiSelectPropsI {
  label: string;
  placeHolder?: string;
  isLoading: boolean;
  selectedOptions: {label: string, value: any}[];
  onSelectOption: (value: any) => void;
  onRemove: (value: any) => void;
  options: {label: string, value: any}[];
  noOptionsMessage?: string;
  size?: Size;
  error?: string;
  state?: State;
}

export const MultiSelect = ({label, placeHolder, options, selectedOptions, isLoading,
                              noOptionsMessage = 'Sin opciones disponibles', state = State.ENABLE,
                              onSelectOption, onRemove, error, size = Size.MEDIUM}: MultiSelectPropsI) => {

  useEffect(() => {
    //No quitar, ya que si no se muestran todas las opciones, quien sabe porque :/
  }, [options])

  const { t } = useTranslation();

  return (
    <div className='w-full'>
      <p className={classNames('text-white mb-2', SIZE_LABEL_MAPS[size])}>{label}</p>
      <Multiselect
        closeOnSelect={true}
        disable={state === State.DISABLE}
        className={classNames(MULTI_SELECT_STYLES, SIZE_MULTI_SELECT_MAPS[size])}
        options={options}
        selectedValues={selectedOptions}
        onSelect={onSelectOption}
        onRemove={onRemove}
        displayValue='label'
        placeholder={placeHolder}
        loading={isLoading}
        emptyRecordMsg={noOptionsMessage}
      />
      {
        /* Show props error */
        error
        && (<p className={classNames('pt-2 text-red flex flex-row items-center', SIZE_ERROR_MESSAGE_MAPS[size])}>
          <MdError className={classNames('text-red mr-2', SIZE_ERROR_MESSAGE_MAPS[size])}/>
          {t(error)}
        </p>)
      }
    </div>
  )
}