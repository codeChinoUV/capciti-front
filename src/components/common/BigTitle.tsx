/**
 * Title common component
 */
import { classNames } from '../../utils/styles';

/**
 * Properties for the component
 */
interface BigTitlePropsI {
  title: string;
  align?: TextAlign
}

/**
 * Available options to align title
 */
export enum TextAlign {
  CENTER,
  LEFT,
  RIGHT
}

/**
 * Map align options with styles
 */
const TEXT_ALIGN_MAPS: Record<TextAlign, string> = {
  [TextAlign.LEFT]: 'text-left',
  [TextAlign.RIGHT]: 'text-right',
  [TextAlign.CENTER]: 'text-center'
}

export const BigTitle = ({title, align = TextAlign.CENTER}: BigTitlePropsI) => {
  return (
    <h1 className={classNames('text-white font-extrabold text-4xl',
      TEXT_ALIGN_MAPS[align])}>
      {title}
    </h1>
  )
}