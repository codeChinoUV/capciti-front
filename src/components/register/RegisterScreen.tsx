import {LoginMain} from "./component/LoginMain";
import {useState} from "react";
import {LoginFacebookDetails} from "./component/LoginFacebookDetails";
import {LoginGoogleDetails} from "./component/LoginGoogleDetails";
import {SuccessRegister} from "./component/SuccessRegister";
import {useNavigate} from "react-router-dom";

type steps = "main" | "facebookDetails" | "googleDetails" | "success"

export const RegisterScreen = () => {

  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState<steps>("main")

  const onFacebookLogin = () => {
    setCurrentStep("facebookDetails");
  }

  const onGoogleLogin = () => {
    setCurrentStep("googleDetails");
  }

  const onSuccessLogin = () => {
    setCurrentStep("success")
  }

  const onClose = () => {
    navigate('/')
  }

  const getCurrentStep = (step: steps) => {
    const loginSteps: Record<string, JSX.Element> = {
      "main": (<LoginMain onGoogleLogin={onGoogleLogin} onFacebookLogin={onFacebookLogin} onClose={onClose} />),
      "facebookDetails": (<LoginFacebookDetails onSuccessLogin={onSuccessLogin} onClose={onClose} />),
      "googleDetails": (<LoginGoogleDetails onSuccessLogin={onSuccessLogin} onClose={onClose} />),
      "success": (<SuccessRegister onClose={onClose} />)
    }

    return loginSteps[step]
  }

  return (
    <div style={{backgroundImage: `url(/assets/asset1.png)`}} className='flex-1'>
      <div className='flex-1 items-end flex pt-20 h-full'>
        { getCurrentStep(currentStep) }
      </div>
    </div>
  )
}
