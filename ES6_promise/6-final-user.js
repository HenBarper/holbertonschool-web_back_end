import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const theStatus = [];
  await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then(async (result) => {
    theStatus.push({
      status: result.status,
      value: result.value,
    });
  }).catch((error) => {
    theStatus.push({
      status: 'rejected',
      value: error.toString(),
    });
  });
}
