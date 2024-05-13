function evaluatePasswordStrength(password) {
    let score = 0;
  ​
//   Score: 0-2 (Weak password)
// Score: 3 (Medium password)
// Score: 4-5 (Strong password)
    if (!password) return '';
  ​
    // Check password length
    if (password.length > 8) score += 1;
    // Contains lowercase
    if (/[a-z]/.test(password)) score += 1;
    // Contains uppercase
    if (/[A-Z]/.test(password)) score += 1;
    // Contains numbers
    if (/\d/.test(password)) score += 1;
    // Contains special characters
    if (/[^A-Za-z0-9]/.test(password)) score += 1;


    switch (score) {
      case 0:
      case 1:
      case 2:
      return "Weak";
    case 3:
      return "Medium";
    case 4:
    case 5:
      return "Strong";
    }
  }


  function PasswordStrengthIndicator({ password }) {
    const strength = evaluatePasswordStrength(password);

    let colorClass = '';
    switch (strength) {
        case 'Weak':
            colorClass = 'text-red-500'; // Apply red color for weak passwords
            break;
        case 'Medium':
            colorClass = 'text-yellow-500'; // Apply yellow color for medium passwords
            break;
        case 'Strong':
            colorClass = 'text-green-500'; // Apply green color for strong passwords
            break;
        default:
            colorClass = ''; // No color
    }

  }