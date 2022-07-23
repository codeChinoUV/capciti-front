/**
 * Common component tho show a side panel
 */
import { classNames } from '../../utils/styles';

/**
 * Available options for the side panel size
 */
export enum Size {
  SMALL,
  MEDIUM,
  LARGE
}

/**
 * Maps available sizes with the styles
 */
const MAP_SIZES: Record<Size, string> = {
  [Size.LARGE]: 'w-[calc(100%-2rem)]',
  [Size.MEDIUM]: 'w-7/12',
  [Size.SMALL]: 'w-4/12'
}

/**
 * Properties for the side panel component
 */
interface SidePanelPropsI {
  isShow: boolean;
  children: JSX.Element | JSX.Element[];
  size?: Size;
}

export const SidePanel = ({isShow, children, size = Size.SMALL}: SidePanelPropsI) => {
  return (
    <>
      <div className={classNames('absolute top-0 left-0 bg-white rounded-r-lg z-20 h-full py-10 px-7 ' +
        'ease-in-out duration-300',
        MAP_SIZES[size],
        isShow ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none')}>
        {
          children
        }
      </div>
      <div className={classNames('absolute top-0 right-0 bg-black/70 top-0 right-0 w-full h-full z-10 ' +
        'transition-opacity duration-300 overflow-hidden',
        isShow ? 'opacity-100' : 'opacity-0 pointer-events-none')}/>
    </>

  )
}