import { classNames } from '../../utils/styles';
import React from 'react';
import { Size } from './SidePanel';

interface ProductSearchPropsI {
  isShow: boolean;
  size?: Size;
  children: JSX.Element
}

const MAP_SIZES_WIDTH: Record<Size, string> = {
  [Size.LARGE]: 'w-full',
  [Size.MEDIUM]: 'w-/12',
  [Size.SMALL]: 'w-5/12'
}

const MAP_SIZES_HEIGHT: Record<Size, string> = {
  [Size.LARGE]: 'h-full',
  [Size.MEDIUM]: 'h-96',
  [Size.SMALL]: 'h-60'
}

const MAP_SIZES_PADDING: Record<Size, string> = {
  [Size.LARGE]: 'p-10',
  [Size.MEDIUM]: 'p-7',
  [Size.SMALL]: 'p-5'
}


export const Modal: React.FC<ProductSearchPropsI> = ({isShow, children, size= Size.LARGE}) => {
  return (
    <div className={classNames('absolute top-0 right-0 bg-black/70 top-0 right-0 w-full h-full z-80 ' +
      'transition-opacity duration-300 overflow-hidden flex p-10 justify-center items-center',
      isShow ? 'opacity-100' : 'opacity-0 pointer-events-none')}>
      <div className={classNames('bg-darkBg1 z-40 rounded-xl ' +
        'ease-in-out duration-300', MAP_SIZES_WIDTH[size], MAP_SIZES_HEIGHT[size], MAP_SIZES_PADDING[size],
        isShow ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none')}>
        {
          children
        }
      </div>
    </div>
  )
}