import {useState} from "react";
import {CheckBox} from "../../common/CheckBox";
import {Size} from "../../common/TextInput";
import {Button, State, Variant} from "../../common/Button";
import {GoogleBtn} from "../../common/GoogleBtn";

interface LoginFacebookDetailsPropsI {
  onSuccessLogin: () => void;
  onClose: () => void;
}

export const LoginGoogleDetails = ({onSuccessLogin, onClose}: LoginFacebookDetailsPropsI) => {
  const [acceptConditions, setAcceptCondition] = useState(false);

  return (
    <div className='flex-1 bg-white rounded-t-lg rounded-r-lg px-5 py-10 flex flex-col justify-between h-full '>
      <div>
        <p className='text-primary text-lg font-semibold'>Registrate</p>
        <p className='text-primary mt-3 text-sm'>Te recordamos que la información de tu cuenta será realacionada
          a tu perfil y siempre la protegeremos.</p>
      </div>
      <div>
        <CheckBox name='accept'
                  checked={acceptConditions}
                  size={Size.MEDIUM}
                  onCheck={() => {setAcceptCondition(!acceptConditions)}}
                  text='Estoy de acuerdo que la información de mi cuenta sea usada y relacionada con mi perfil. Confirmo para continuar.' />
      </div>
      <div className='flex flex-col gap-4'>
        <GoogleBtn onClick={onSuccessLogin}
                     isLoading={false}
                     state={acceptConditions ? State.ACTIVE : State.DISABLE}/>
        <Button onClick={onClose} text='Cerrar' variant={Variant.SECONDARY} />
      </div>
    </div>
  )
}