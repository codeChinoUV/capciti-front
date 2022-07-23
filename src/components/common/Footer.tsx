import Logo from "../../assets/logo.png";

export const Footer = () => {
  return (
    <div className='mt-5 h-20 bg-footer py-7 px-4 flex justify-between items-center'>
      <img src={Logo} alt="logo" className='h-7'/>
      <p className='text-primary font-bold text-sm cursor-pointer'>Politica de privacidad</p>
    </div>
  )
}