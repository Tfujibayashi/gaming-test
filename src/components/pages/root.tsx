import React, { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import WebFont from 'webfontloader';

import 'nes.css/css/nes.min.css';
import Routing from '~/route';

export const Root: React.FC = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Press Start 2P'],
      },
    });

    // firebase
    const firebaseConfig = {
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_FIREBASE_APP_ID,
      measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
    };

    initializeApp(firebaseConfig);
  }, []);

  return <Routing />;
};
