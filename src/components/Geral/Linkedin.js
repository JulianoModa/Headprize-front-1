import React, { useState } from 'react';

import { useLinkedIn } from 'react-linkedin-login-oauth2';
// You can use provided image shipped by this package or using your own
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png';
import { handleSuccess } from '../../services/auth';

const LINKEDIN_CALLBACK_URL = 'http://headprize.me:21073/api/auth/linkedin';
const linkedinOAuthURL = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.REACT_APP_LINKEDIN_CLIENT_ID}&redirect_uri=${encodeURIComponent(
  LINKEDIN_CALLBACK_URL
)}&state=DCEeFWf45A53sdfKef424&scope=r_liteprofile%20r_emailaddress`;

function LinkedInPage() {
  const clientId = process.env.REACT_APP_LINKEDIN_CLIENT_ID;
  const { linkedInLogin } = useLinkedIn({
    clientId: clientId,
    redirectUri: `http://headprize.me:21073/api/auth/linkedin`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
    scope: 'email,profile',
    onSuccess: async (code) => {
      console.log('code', code);
      const profile = await handleSuccess(code);
      console.log('profile', profile);

    },
    onError: (error) => {
      console.log('error', error);
    },
  });

  const handleLinkedInCallback = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get('code');
    if (code) console.log(code)//handleLogin(code);
  };

  return (
    <a href={linkedinOAuthURL}>
    <img
      // className={"linkedin-button"}
      src={linkedin}
      alt="Entre com Linked In"
    />
    </a>
  );
}

export default LinkedInPage;