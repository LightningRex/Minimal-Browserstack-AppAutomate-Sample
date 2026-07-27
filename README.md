# WebdriverIO + BrowserStack App Automate — Minimal Sample

A bare-bones WebdriverIO project set up to run a mobile app test on
[BrowserStack App Automate](https://www.browserstack.com/app-automate).

## Project structure

```
wdio-browserstack-app-sample/
├── package.json
├── wdio.conf.js
├── .env.example
└── test/
    └── specs/
        └── sample/
            └── app.spec.js
```

## 1. Install dependencies

Requires **Node.js 18.20.0 or newer** (WebdriverIO v9 requirement).

```bash
npm install
```

## 2. Get BrowserStack credentials

Find your username and access key on your
[BrowserStack Account Settings page](https://www.browserstack.com/accounts/settings).

## 3. App upload — not required for this repo

This project is wired to use BrowserStack's publicly hosted sample app
(`bs://sample.app` in `wdio.conf.js`), so **you do not need to upload your
own app binary** to get this running. Just add your credentials (step 4
below) and run the test.

Once you're ready to test your own app, upload your `.apk`/`.aab` (Android)
or `.ipa` (iOS) file via the BrowserStack API:

```bash
curl -u "YOUR_USERNAME:YOUR_ACCESS_KEY" \
  -X POST "https://api-cloud.browserstack.com/app-automate/upload" \
  -F "file=@/path/to/your/app.apk"
```

The response contains an `app_url` like:

```json
{ "app_url": "bs://c700ce60cf13ae8ed97705a55b8e022f13c5c6cc" }
```

Then replace `bs://sample.app` in `wdio.conf.js` with that `app_url`
(or point it at a `BROWSERSTACK_APP_ID` env var if you prefer).

## 4. Set environment variables

Copy `.env.example` to `.env` (or export the variables directly in your shell)
and fill in your BrowserStack credentials:

```bash
export BROWSERSTACK_USERNAME=your_browserstack_username
export BROWSERSTACK_ACCESS_KEY=your_browserstack_access_key
export BROWSERSTACK_APP_ID=your_browserstack_app_id — not required for this repo
```

`BROWSERSTACK_APP_ID` is only needed once you swap in your own app (see
step 3) — the default config uses BrowserStack's hosted sample app instead.

If you'd rather use a `.env` file with `npm test`, install `dotenv-cli`
(`npm i -D dotenv-cli`) and run `dotenv -e .env npm test`.

## 5. Update the device/capability if needed

`wdio.conf.js` defaults to an Android device (`Google Pixel 7`, Android 13).
For iOS, switch `platformName` to `iOS`, use `deviceName` /
`platformVersion` for an iOS device. See BrowserStack's
[capability generator](https://www.browserstack.com/app-automate/capabilities)
for exact values.

## 6. Run the test

```bash
npm test
```

This runs `test/specs/sample/app.spec.js` against your uploaded app on BrowserStack's
device cloud. Open your
[App Automate dashboard](https://app-automate.browserstack.com/dashboard)
to watch the session, video, and logs.

## Next steps

- Replace the placeholder assertion in `app.spec.js` with real interactions
  using your app's element locators (accessibility id, `-android uiautomator`,
  or `-ios predicate string`).
- Add more specs under `test/specs/**/`.
- For parallel runs across multiple devices, add more capability objects to
  the `capabilities` array in `wdio.conf.js`.
