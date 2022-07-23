import {classNames} from "../../utils/styles";

interface SectionSeparatorPropsI {
  img: any;
  text: string;
  textColor?: string;
}

export const SectionSeparator = ({img, textColor = 'text-white', text}: SectionSeparatorPropsI) => {
  return (
    <div className='relative rounded-lg bg-gray mr-4 my-2 h-14 flex justify-center items-center'>
      <img src={img} alt={text} className='absolute top-0 h-14 w-full left-0 object-cover rounded-lg' />
      <p className={classNames(textColor, 'text-center z-10 text-xs font-semibold px-5')}>{text}</p>
    </div>
  )
}