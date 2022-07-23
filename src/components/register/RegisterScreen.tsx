import {LoginMain} from "../login/component/LoginMain";
import {useState} from "react";
import {LoginFacebookDetails} from "../login/component/LoginFacebookDetails";
import {LoginGoogleDetails} from "../login/component/LoginGoogleDetails";
import {SuccessRegister} from "../login/component/SuccessRegister";

type steps = "main" | "facebookDetails" | "googleDetails" | "success"

export const RegisterScreen = () => {

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

  const getCurrentStep = (step: steps) => {
    const loginSteps: Record<string, JSX.Element> = {
      "main": (<LoginMain onGoogleLogin={onGoogleLogin} onFacebookLogin={onFacebookLogin} onClose={() => {}} />),
      "facebookDetails": (<LoginFacebookDetails onSuccessLogin={onSuccessLogin} />),
      "googleDetails": (<LoginGoogleDetails onSuccessLogin={onSuccessLogin} />),
      "success": (<SuccessRegister />)
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
