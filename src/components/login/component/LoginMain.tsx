import {FacebookBtn} from "../../common/FacebookBtn";
import {GoogleBtn} from "../../common/GoogleBtn";
import {Button, Variant} from "../../common/Button";

interface LoginMainPropsI {
  onGoogleLogin: () => void;
  onFacebookLogin: () => void;
  onClose: () => void;
}

export const LoginMain = ({onFacebookLogin, onGoogleLogin, onClose}: LoginMainPropsI) => {
  return (
    <div className='flex-1 bg-white rounded-t-lg rounded-r-lg px-5 py-10 flex flex-col justify-between h-full '>
      <div>
        <p className='text-primary text-lg font-semibold'>Registrate</p>
        <p className='text-primary mt-3 text-sm'>Con tus redes sociales</p>
        <div className='flex flex-col gap-4 mt-10'>
          <FacebookBtn onClick={onFacebookLogin} />
          <GoogleBtn onClick={onGoogleLogin} />
        </div>
      </div>
      <div>
        <p className='text-primary mt-3 text-sm'>Registarte con tu correo</p>
        <div className='flex flex-col gap-4 mt-6'>
          <Button onClick={() => {}} text='Registro con correo' />
        </div>
      </div>
      <Button onClick={onClose} text='Cerrar' variant={Variant.SECONDARY} />
    </div>
  )
}