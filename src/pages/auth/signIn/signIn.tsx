import { SigninForm } from "@/components/signin-form"

function SignIn() {

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-sm md:max-w-3xl">
        <SigninForm></SigninForm>
      </div>
    </div>
  )
}

export default SignIn