# OTP & Password Generator

A simple and customizable OTP and password generator for Node.js and TypeScript projects.

## Installation

```sh
npm install @anisafifi/otp-pass-kit
```

## Importing the Module

```ts
import { generateOtp, generatePass } from "@anisafifi/otp-pass-kit";
```

## OTP Generator

### Function Signature

```ts
function generateOtp(length?: number, options?: OtpOptions): string;
```

### Options

| Option              | Type    | Default | Description                         |
|--------------------|--------|---------|-------------------------------------|
| `upperCaseAlphabets` | boolean | `false` | Include uppercase letters          |
| `lowerCaseAlphabets` | boolean | `false` | Include lowercase letters          |
| `specialChars`       | boolean | `false` | Include special characters         |
| `digits`            | boolean | `true`  | Include digits                      |

### Example Usage

```ts
import { generateOtp } from "@anisafifi/otp-pass-kit";

const otp1 = generateOtp(); // Default 6-digit numeric OTP
console.log(otp1);

const otp2 = generateOtp(8, { upperCaseAlphabets: true, digits: true }); // 8-character OTP with digits and uppercase letters
console.log(otp2);
```

## Password Generator

### Function Signature

```ts
function generatePass(length?: number, options?: passOptions): string;
```

### Options

| Option              | Type    | Default | Description                         |
|--------------------|--------|---------|-------------------------------------|
| `upperCaseAlphabets` | boolean | `true`  | Include uppercase letters          |
| `lowerCaseAlphabets` | boolean | `true`  | Include lowercase letters          |
| `specialChars`       | boolean | `true`  | Include special characters         |
| `digits`            | boolean | `true`  | Include digits                      |

### Example Usage

```ts
import { generatePass } from "@anisafifi/otp-pass-kit";

const password1 = generatePass(); // Default 8-character password with all character sets
console.log(password1);

const password2 = generatePass(12, { lowerCaseAlphabets: true, digits: true }); // 12-character password with lowercase letters and digits
console.log(password2);
```

## Error Handling

If no character set is selected in the options, an error is thrown:

```ts
try {
  generateOtp(6, { upperCaseAlphabets: false, lowerCaseAlphabets: false, specialChars: false, digits: false });
} catch (error) {
  console.error(error.message); // "At least one character set must be enabled"
}
```

## License

This package is licensed under the MIT License.