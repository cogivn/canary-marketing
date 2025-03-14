import { GoogleSignIn } from "./GoogleSignIn";
export const AuthComponent = () => {
  return (
    <div>
      <div className="relative flex py-5 items-center justify-center">
        <div className="grow border-t border-gray-400"></div>
        <span className="shrink mx-4 text-red-500 text-center">Or</span>
        <div className="grow border-t border-gray-400"></div>
      </div>
      <GoogleSignIn />
    </div>
  );
};


export default AuthComponent;