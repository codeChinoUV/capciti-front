import {State} from './Button';
import {FaFacebookSquare} from 'react-icons/fa';
import {classNames} from "../../utils/styles";

/**
 * Properties for the button component
 */
interface IButtonProps {
  onClick: () => void;
  state?: State;
  type?: 'button' | 'submit' | 'reset';
  isLoading?: boolean;
}

/**
 * The styles for loading spinner
 */
const LOADING_STYLES = 'animate-spin w-6 text-white text-center ml-3';


export const FacebookBtn = ({onClick, state = State.ACTIVE, isLoading}: IButtonProps) => {
  return (
    <button className={classNames('flex items-center rounded-md no-underline text-center text-xl w-full py-3',
      state === State.ACTIVE ? 'bg-facebook' : 'bg-facebookDisable')}
            disabled={state === State.DISABLE || isLoading}
            onClick={onClick}>

        <span className="w-full flex justify-center items-center">
            <FaFacebookSquare className={"text-2xl mr-3 text-white"}/>
          <span className='text-white text-base'>Facebook</span>
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