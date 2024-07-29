// Function to generate OTP
function generateOTP(length = 6) {
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let otp = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      otp += characters[randomIndex];
    }
  
    return otp;
  }
  
  // Function to validate OTP
  function validateOTP(providedOTP, correctOTP, length = 6) {
    if (providedOTP.length !== length) {
      console.log('Invalid OTP: Incorrect length');
      return false;
    }
  
    const validCharacters = /^[0-9A-Za-z]+$/;
    if (!validCharacters.test(providedOTP)) {
      console.log('Invalid OTP: Contains invalid characters');
      return false;
    }
  
    if (providedOTP === correctOTP) {
      console.log('OTP is valid');
      return true;
    } else {
      console.log('Invalid OTP: Does not match');
      return false;
    }
  }
  
  // Example usage
  const otpLength = 6;
  const generatedOTP = generateOTP(otpLength);
  console.log('Generated OTP:', generatedOTP);
  
  const userProvidedOTP = ''; // Replace with user input
  const isValid = validateOTP(userProvidedOTP, generatedOTP, otpLength);
  
  if (isValid) {
    console.log('OTP validation successful');
  } else {
    console.log('OTP validation failed');
  }
  
  
  