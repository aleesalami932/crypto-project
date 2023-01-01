import * as forge from 'node-forge';
export function rsaDecrypt(privateKey: string, encryptedText: string) {
  const decryption = forge.pki.privateKeyFromPem(
    `-----BEGIN RSA PRIVATE KEY-----
      MIIEowIBAAKCAQEAxfOVg6d9c5AYIg6z8WM78GwiA5tucIdd8kxjUiU4bjvHJSKp
      HSMpxnYGvvAD1BXvaT7O9QxpFpustDy4BkPQwhyaY01btwaP9FDavUdmmqvOnEOg
      ro8U9IvMuet94xeLj6XUflCc8lkgwV4RrTfW451OxJCXCLcmkFRPaf+lREgpqvFv
      ayTaAYjwErnA5hvbJrIoFw+O+FTtDeasAzIQWSZFG8R9uLUoAZ/CEA4OBDVFDXA3
      4hmVCalR5HzuQF41x/NgCRu0FVNKvxOt6Zi3amUUZhVkwV2zmF4Yx6P9nbjMt1R1
      6lLDJd7x3U0LPeysSfzHRmGA/9Z/VTqTgEjxXQIDAQABAoIBACOOiYDIiSRE8dDM
      S05EwPOCuOlk9gWIizuGtSCARw6l9jOZcj8lnc9kS/noKwfhmMuS2KHzxLym4fLO
      JVAaxljXwnOr5ZmOuDTugRwWwzttOQOgsjAoy17R7chHoKk2BX+cDftSh56Qm+2f
      9BTlPthL3WY5gqeyHl82hb1IimslKif3BfQt3k7L4u2OMbgtoMsG4fuCCTGXbzWJ
      OfS0hDtDSq71Rm7fRAcBwX1ndxCWljo6t4Azj9OevJS2sy45GsUMyoqKrv4LpYkM
      5KrNQU9CpvFM6er57FmmFVRELb3nk12HB3hw4BML74NfhbyjUJW8+mvR22Kk66Zs
      rbOEMRECgYEA8Oi9vBGnAs031ubMr4j5nxdn8TDENC1wWIpbkMEgIaaCms1ukt9d
      A8entSVbdwygOB2BQHpYy1maghZ373yZ83sm8UDhmWuxu1ghxC/YDoEbx21gbpw1
      MGDiLmRxuOKcO9L3lRANZ1ZvvpS56W/dAPz3RSpAYZnYTYl0RUxSumMCgYEA0ln3
      jS4W4c1dU2u/2dCqWMA6A1oSiZliWDYdxqpmSd0vlWFi7157p9+5wfP7/uoQP6Hi
      7LrCF47cRLnauOUTe1Dlfl39h0rYi2K3ggt6SSDfCvM62Z25ci1A9hRarF98kiw/
      itW9eaXxGhKTzcXclOwsCiOEZBtD6E6YMzupkT8CgYALCuAHiteY7Uct9o5TTXgD
      rtL43z9fFOYdaNohnHiYkkVSSzBSUyK0VaZ+SyQSJOYDLHcMOY9wYr8OT3FX7OIx
      oud6D3tHyQPwjm2dzIOexpQ7Y+wTpd1aRlaXwcrkqp52r4jhsEatAe1FUxPie1op
      /W5oITOqRZ8AjthhhMoV+QKBgAt4qI1kdA8AWhSQjbfdL00DvqYsJVKnsLtKyDjr
      VgS1MUEePHz9VBUFmGXBXn66WQR/WZa7YJZUTiLZV9o5c+SHttw7V/Ym2MRRL9zB
      r3uJdWBtf0oa1eAqI57H4WIBGxQFobl6ioi1yf44ASN5pNviPUyYP0IOUpe6oYY5
      vLeVAoGBAKZKzlbZ6LnkEws8rhUGWsRhCo/KKxpvVWgaS8rN68z/YL5nWcfH/PUd
      pT8Wvt/WETjku6jkeO1flJXK1Q2iamtSJxxA0JqLEZ3oiawIi0z8XX0vOzb60zX3
      U/FKoHf9H6OmYtYK9/8iXI4B6OHRQuEsGKdhZ+PZJ4103ZtE1x14
      -----END RSA PRIVATE KEY-----`,
  );
  console.log('decryption', decryption);

  const plainText = decryption.decrypt(encryptedText, 'RSA-OAEP', {
    md: forge.md.sha256.create(),
    mgf1: forge.mgf1.create(),
  });

  return 'plainText';
}
