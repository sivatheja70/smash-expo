import { ExpoConfig, ConfigContext } from 'expo/config';
 
const buildNumber = process.env.BuildNumber;
 
export default ({ config }): ExpoConfig => ({
  ...config,
  name: process.env.APP_NAME,
 android: {
   
    package: "com.smash.in"
    
  },

  owner: "sivatheja"
}
 
);
