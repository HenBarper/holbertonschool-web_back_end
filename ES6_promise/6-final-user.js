import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  // Use Promise.allSettled to run both promises concurrently
  const [userPromise, photoPromise] = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);

  // Create an array of result objects
  const results = [
    {
      status: userPromise.status,
      value: userPromise.status === 'fulfilled' ? userPromise.value : userPromise.reason,
    },
    {
      status: photoPromise.status,
      value:
        photoPromise.status === 'fulfilled'
          ? photoPromise.value
          : photoPromise.reason.message, // Extract the error message
    },
  ];

  return results;
}
