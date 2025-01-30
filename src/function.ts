import { OtpOptions, passOptions } from "./type";

// ----------------------- OTP generator ------------------------------------
export function generateOtp(length: number = 6, options?: OtpOptions): string {
    // Default options if not provided
    const defaultOptions: OtpOptions = {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
      digits: true,
      ...options,
    };
  
    // Define character sets
    const digitSet = "0123456789";
    const lowerCaseSet = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialCharSet = "!@#$%^&*()_+[]{}|;:,.<>?";
  
    // Build the character pool based on options
    let characterPool = "";
    if (defaultOptions.digits) characterPool += digitSet;
    if (defaultOptions.lowerCaseAlphabets) characterPool += lowerCaseSet;
    if (defaultOptions.upperCaseAlphabets) characterPool += upperCaseSet;
    if (defaultOptions.specialChars) characterPool += specialCharSet;
  
    // Fallback if no character set is selected
    if (!characterPool)
      throw new Error("At least one character set must be enabled");
  
    // Generate OTP
    let otp = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      otp += characterPool[randomIndex];
    }
  
    return otp;
  }

// ------------------- password generator -----------------------------------------
  export function generatePass(length: number = 8, options?: passOptions): string {
    // Default options if not provided
    const defaultOptions: passOptions = {
      upperCaseAlphabets: true,
      lowerCaseAlphabets: true,
      specialChars: true,
      digits: true,
      ...options,
    };
  
    // Define character sets
    const digitSet = "0123456789";
    const lowerCaseSet = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialCharSet = "!@#$%^&*()_+[]{}|;:,.<>?";
  
    // Build the character pool based on options
    let characterPool = "";
    if (defaultOptions.digits) characterPool += digitSet;
    if (defaultOptions.lowerCaseAlphabets) characterPool += lowerCaseSet;
    if (defaultOptions.upperCaseAlphabets) characterPool += upperCaseSet;
    if (defaultOptions.specialChars) characterPool += specialCharSet;
  
    // Fallback if no character set is selected
    if (!characterPool)
      throw new Error("At least one character set must be enabled");
  
    // Generate OTP
    let otp = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      otp += characterPool[randomIndex];
    }
  
    return otp;
  }