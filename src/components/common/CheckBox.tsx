/**
 * General component Checkbox
 */
import { Size } from './TextInput';
import { classNames } from '../../utils/styles';

interface CheckBoxPropsI {
  name: string;
  checked: boolean;
  onCheck: (e: any) => void;
  text: string;
  size?: Size;
}

const MAPS_SIZE: Record<Size, string> = {
  [Size.LARGE]: 'text-2xl',
  [Size.MEDIUM]: 'text-sm',
  [Size.SMALL]: 'text-sm'
}

const MAPS_CHECK_BOX: Record<Size, string> = {
  [Size.LARGE]: 'w-10 h-10',
  [Size.MEDIUM]: 'w-8 h-8',
  [Size.SMALL]: 'w-6 h-6'
}

const MAPS_CHECK_BOX_CHECKED: Record<Size, string> = {
  [Size.LARGE]: 'w-5 h-5',
  [Size.MEDIUM]: 'w-4 h-4',
  [Size.SMALL]: 'w-3 h-3'
}

export const CheckBox = ({name, text, checked, onCheck, size = Size.SMALL}: CheckBoxPropsI) => {
  return (
    <div className="flex items-center">
      <div className={classNames('transition duration-150 ease-in flex flex-shrink-0 justify-center items-center ' +
        'mr-6 border-2 border-primary',
        MAPS_CHECK_BOX[size], checked ? 'bg-primary' : 'bg-white')}
           onClick={onCheck}>
        <svg
          className={classNames('fill-current pointer-events-none', MAPS_CHECK_BOX_CHECKED[size], checked ? '' : 'hidden')}
          version="1.1"
          viewBox="0 0 17 12"
          xmlns="http://www.w3.org/2000/svg">
          <g fill="#FFFFFF" fillRule="evenodd">
            <g transform="translate(-9 -11)" fill="#FFFFFF" fillRule="nonzero">
              <path
                d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"/>
            </g>
          </g>
        </svg>
      </div>
      <label htmlFor={name} className={classNames('select-none text-primary', MAPS_SIZE[size])}>{text}</label>
      <input name={name} type="checkbox" checked={checked} onChange={onCheck} className="opacity-0 absolute h-8 w-8"/>
    </div>
  )
}