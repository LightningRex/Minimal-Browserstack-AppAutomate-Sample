describe('Sample App Automate test', () => {
  it('should launch the app and confirm the session is active', async () => {
    console.log('App session started. Session ID:', driver.sessionId);
    await expect(driver.sessionId).not.toBeNull();
  });
});