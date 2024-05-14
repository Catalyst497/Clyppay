export function evaluatePasswordStrength(password) {

  let strength = '';
  let color = '';

  // Check password length
  if (password?.length < 8) {
    strength = 'Weak';
    color = '#FF0000';
 
  }
  if (password?.length >= 8 &&  (!/[a-z]/.test(password) || !/[!@#$%^&*(),.?":{}|<>]/.test(password) )) {

    strength = 'Medium';
    color = '#FFA500';
  }
  if (password?.length >= 8 && /[a-z]/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password) ) {
    strength = 'Strong';
    color = '#00FF00';
   
  }



  return { strength, color };
}
