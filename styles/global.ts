import { css } from '@emotion/react';
import font from './font';
import { reset } from './reset';

export const global = css`
  ${reset}
  ${font}

  html,
  body {
    /* Change Autocomplete styles in Chrome */
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
      transition: background-color 5000s ease-in-out 0s;
    }
  }
`;
