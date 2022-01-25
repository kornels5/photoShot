import { createApi } from 'unsplash-js';

const configuration = {
  accessKey: process.env.REACT_APP_ACCES_KEY_UNSPLASH_API as string,
};

export default createApi(configuration);
