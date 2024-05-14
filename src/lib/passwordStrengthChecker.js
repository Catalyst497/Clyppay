export function evaluatePasswordStrength(password) {
  let score = 0;
  let strength = '';
  let color = '';

  // Check password length
  if (password?.length >= 8) score += 1;
  // Contains lowercase character
  if (/[a-z]/.test(password)) score += 1;
  // Contains special character
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score += 1;

  // Determine strength and color based on score
//   Light Red: #FF8080
// Light Yellow: #FFFF80
// Light Green: #80FF80
  if (score === 0 || password?.length < 8) {
      strength = 'Weak';
      color = '#FF8080';
  } else if (score === 1) {
      strength = 'Medium';
      color = '#FFFF80';
  } else if (score >= 2) {
      strength = 'Strong';
      color = '#80FF80';
  }

  return { strength, color };
}
