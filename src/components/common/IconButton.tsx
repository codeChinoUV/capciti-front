import { IconType } from 'react-icons';
import { Size, State, Variant } from './Button';
import { classNames } from '../../utils/styles';

const VARIANT_MAPS_BUTTON: Record<Variant, string> = {
  [Variant.PRIMARY]: 'bg-primary',
  [Variant.SECONDARY]: 'bg-white',
  [Variant.DANGER]: 'bg-red'
}

const VARIANT_MAPS_ICON: Record<Variant, string> = {
  [Variant.PRIMARY]: 'text-white',
  [Variant.SECONDARY]: 'text-primary',
  [Variant.DANGER]: 'text-white'
}

const SIZE_MAPS: Record<Size, string> = {
  [Size.SMALL]: 'text-2xl p-1 space-x-0.5',
  [Size.MEDIUM]: 'text-4xl p-1.5 space-x-2',
  [Size.LARGE]: 'text-5xl p-2 space-x-3',
  [Size.XLARGE]: 'text-6xl p-1.5 space-x-5',
  [Size.FULL]: 'text-6xl w-full'
}

interface IconButtonPropsI {
  icon: IconType;
  variant?: Variant;
  size?: Size;
  onClick: () => void;
  state?: State;
}

export const IconButton = ({icon: Icon, onClick, variant = Variant.PRIMARY, size = Size.MEDIUM, state = State.ACTIVE}: IconButtonPropsI) => {
  return (
    <button className={classNames('flex items-center rounded-xl text-center',
      VARIANT_MAPS_BUTTON[variant])} onClick={onClick} disabled={state === State.DISABLE}>
      {<Icon className={classNames(SIZE_MAPS[size], VARIANT_MAPS_ICON[variant])}/>}
    </button>
  )
}