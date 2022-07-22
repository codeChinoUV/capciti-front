/**
 * Common component to show app icon
 */
import MainLogo from '../../assets/img/main-logo.png';

export const LaMontaniaIcon = () => {
  return (
    <div className="bg-formBG rounded-lg p-3 w-max">
      <img src={MainLogo} alt="La montania logo" className="w-12 h-12"/>
    </div>
  )
};