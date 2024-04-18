import { ExpoConfig, ConfigContext } from 'expo/config';
 
const buildNumber = process.env.BuildNumber;
 
export default ({ config }): ExpoConfig => ({
  ...config,
  name: process.env.APP_NAME,
  slug: process.env.APP_SLUG,
 android: {
   
    package: "com.smash.in"
    
  },

  owner: "sivatheja"
}
 
);
