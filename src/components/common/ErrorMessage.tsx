/**
 * Common component for show error messages
 */

import { useTranslation } from 'react-i18next';
import { MdError } from 'react-icons/md';

/**
 * Properties for the error message component
 */
interface ErrorMessagePropsI {
  errorCode: string;
}

export const ErrorMessage = ({errorCode}: ErrorMessagePropsI) => {

  const {t} = useTranslation();

  return (
    <div className="w-full bg-red/70 p-2 px-7 rounded-lg my-5 static">
      <p className="text-white text-xl flex items-center"><MdError className="mr-1"/> {t(errorCode)} </p>
    </div>
  )
}