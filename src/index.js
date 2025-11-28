export async function handler(request, context) {
  console.log('Pit Stop Analyst started!');
  return {
    body: JSON.stringify({
      success: true,
      message: 'Pit Stop Analyst is running! Ready to help your team.'
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  };
}
