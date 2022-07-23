import {BsCheckCircleFill} from "react-icons/bs";
import {Button, Size, Variant} from "../../common/Button";

export const SuccessRegister = () => {
  return (
    <div className='flex-1 bg-white rounded-t-lg rounded-r-lg px-5 py-10 flex flex-col justify-between h-full '>
      <div className='flex flex-col justify-between items-center h-full'>
        <div />
        <div className='flex flex-col items-center w-full'>
          <BsCheckCircleFill className='text-9xl text-success' />
          <p className='text-primary font-semibold mt-5'>¡Registro exitoso!</p>
        </div>
        <div className='flex w-full'>
          <Button onClick={() => {}} text='Continuar' size={Size.FULL} variant={Variant.SUCCESS}/>
        </div>
      </div>
    </div>
  )
}