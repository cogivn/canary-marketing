'use client'

import { Button } from "@payloadcms/ui"
import { signin } from "payload-auth-plugin/client"
import { FcGoogle } from "react-icons/fc"

export const GoogleSignIn = () => {
  return (
    <Button
    size="large"
    buttonStyle="secondary"
    iconPosition="left"
    icon={<FcGoogle />}
      onClick={() => signin("google")}
      className="bg-white hover:bg-gray-100 border border-gray-200 rounded-lg shadow-md py-2 px-4 flex items-center justify-center mx-auto"
    >
      <span>Sign in with Google</span>
    </Button>
  )
}