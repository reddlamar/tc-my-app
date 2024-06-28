import { useState } from "react";

export function usePassword() {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [hidePassword, setHidePassword] = useState<boolean>(true);

  return {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    hidePassword,
    setHidePassword,
  };
}
