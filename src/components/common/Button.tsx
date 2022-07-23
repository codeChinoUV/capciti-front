/**
 * Common component button with all variants
 */

import { classNames } from '../../utils/styles';

/**
 * Indicate the style variant of the button
 */
export enum Variant {
  PRIMARY,
  SECONDARY,
  DANGER,
  SUCCESS
}

/**
 * Indicate the size of the button styles
 */
export enum Size {
  SMALL,
  MEDIUM,
  LARGE,
  XLARGE,
  FULL
}

/**
 * Indicate the active state of button
 */
export enum State {
  ACTIVE,
  DISABLE
}

/**
 * Create the map of the types of variants it's styles
 */
const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.PRIMARY]: 'text-white',
  [Variant.SUCCESS]: 'bg-success text-white',
  [Variant.SECONDARY]: 'bg-transparent text-primary ',
  [Variant.DANGER]: 'text-white shadow-lg shadow-red/30'
}

/**
 * Create the map of the types for icons of variants it's styles
 */
const VARIANT_ICON_MAPS: Record<Variant, string> = {
  [Variant.PRIMARY]: 'text-white',
  [Variant.SECONDARY]: 'text-primary',
  [Variant.SUCCESS]: 'text-white',
  [Variant.DANGER]: 'text-white',
}

/**
 * Create the map of the types of sizes and it's types
 */
const SIZE_MAPS: Record<Size, string> = {
  [Size.SMALL]: 'text-xs p-1 space-x-0.5',
  [Size.MEDIUM]: 'text-sm p-2 space-x-2 py-4',
  [Size.LARGE]: 'text-xl p-3 space-x-3 px-11 font-semibold',
  [Size.XLARGE]: 'text-2xl py-4 px-12 space-x-5 font-semibold',
  [Size.FULL]: 'text-xl w-full py-3'
}

/**
 * The styles for loading spinner
 */
const LOADING_STYLES = 'animate-spin w-6 text-white text-center ml-3';

/**
 * Maps between the types of buttons and the state
 */
const DISABLE_PRIMARY_STYLES = 'bg-primaryLight cursor-not-allowed';
const ENABLE_PRIMARY_STYLES = 'bg-primary hover:bg-primaryDark';
const DISABLE_SECONDARY_STYLES = 'cursor-not-allowed bg-transparent';
const ENABLE_SECONDARY_STYLES = 'bg-transparent';
const DISABLE_DANGER_STYLES = 'bg-redLight cursor-not-allowed';
const ENABLE_DANGER_STYLES = 'bg-red hover:bg-primaryDark';

/**
 * Properties for the button component
 */
interface IButtonProps {
  onClick: () => void;
  text: string;
  icon?: any;
  state?: State;
  variant?: Variant;
  size?: Size;
  type?: 'button' | 'submit' | 'reset';
  isLoading?: boolean;
}

export const Button = ({
                         onClick, text, icon: Icon,
                         state = State.ACTIVE,
                         size = Size.MEDIUM,
                         type = 'button', isLoading = false,
                         variant = Variant.PRIMARY
                       }: IButtonProps) => {
  return (
    <button type={type}
            className={classNames('flex items-center rounded-md no-underline text-center ',
              VARIANT_MAPS[variant],
              SIZE_MAPS[size],
              variant === Variant.PRIMARY && state === State.ACTIVE && !isLoading && ENABLE_PRIMARY_STYLES,
              variant === Variant.PRIMARY && state === State.DISABLE && DISABLE_PRIMARY_STYLES,
              variant === Variant.PRIMARY && isLoading && DISABLE_PRIMARY_STYLES,
              variant === Variant.SECONDARY && state === State.ACTIVE && !isLoading && ENABLE_SECONDARY_STYLES,
              variant === Variant.SECONDARY && state === State.DISABLE && DISABLE_SECONDARY_STYLES,
              variant === Variant.SECONDARY && isLoading && DISABLE_SECONDARY_STYLES,
              variant === Variant.DANGER && state === State.ACTIVE && !isLoading && ENABLE_DANGER_STYLES,
              variant === Variant.DANGER && state === State.DISABLE && DISABLE_DANGER_STYLES,
              variant === Variant.DANGER && isLoading && DISABLE_DANGER_STYLES,
            )}
            disabled={state === State.DISABLE || isLoading}
            onClick={onClick}>

        <span className="w-full flex justify-center items-center">
            {!!Icon && (<Icon className={classNames("text-2xl mr-2", VARIANT_ICON_MAPS[variant])}/>)}
          {text}
          {
            isLoading &&
            (<svg className={LOADING_STYLES}
                  fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
            </svg>)
          }
        </span>
    </button>
  )
}
