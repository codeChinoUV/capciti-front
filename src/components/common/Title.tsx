/**
 * Common component title
 */

import { classNames } from '../../utils/styles';

/**
 * Properties fot title component
 */
interface TitlePropsI {
  title: string;
  align?: TEXT_ALIGN
}

/**
 * Available align options for the component
 */
enum TEXT_ALIGN {
  LEFT,
  RIGHT,
  CENTER
}

/**
 * Maps text align options and their styles
 */
const MAP_TEXT_ALIGNS: Record<TEXT_ALIGN, string> = {
  [TEXT_ALIGN.LEFT]: 'text-left',
  [TEXT_ALIGN.RIGHT]: 'text-right',
  [TEXT_ALIGN.CENTER]: 'text-center'
}

export const Title = ({title, align = TEXT_ALIGN.LEFT}: TitlePropsI) => {
  return (
    <h1 className={classNames('text-white font-semibold text-3xl', MAP_TEXT_ALIGNS[align])}>
      {title}
    </h1>
  )
}