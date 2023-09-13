import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((thePromises) => {
      console.log(`${thePromises[0].body} ${thePromises[1].firstName} ${thePromises[1].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
