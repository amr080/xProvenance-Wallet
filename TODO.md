# TODO
## To do shortlist

### Main TODO Item:
* Cleanup how we pull/save data
  - Redux store is a combination of multiple stores (walletConnect, accounts, etc)
  - Each redux store should initialize itself by pulling from browser storage (if possible since async...)
  - If not possible, need "init" function which will run on app startup, pulling all data in from browser, also event listeners

### Unsolved Issues
* dApp sending back to back messages sometimes no popup is triggered causing the dApp to hang

### Wallet Functionality
* Re-add all protos
* Sign for transactions

### Wallet Connect / dApps
* When connecting into a dApp, user should be able to select target account to connect (and set active)
* Correctly form/create JWT when connecting with wallet connect (just dummy data right now)

### General
* In settings, allow user to set timeout for auto-logout
* Success page (typically used after a Notification)
* Auto check mnuemonic input fields as they are entered (make sure valid word)
* Generic success page/message
  - After creating an account or performing specific actions (vs just redirecting back to the landing page)
* Instead of "Please Wait" messages, show a full page spinning loader (can later add additional text)

### Accounts
* Automatically switch API urls based on current active wallet.  TP will go to test urls, PB will go to prod urls
* When creating the first account, the name will be for the Wallet.  Wallet => Seed
* Split accounts by wallet name in dashboard menu
* Allow importing new wallets and display in dashboard menu (under new wallet names)

### App
* Update/Finish transactions page
* Update all settings, get them to function correctly
* Ability to reset/remove all wallets (Are we sure we want this functionality?)
* Ability so Send/Receive from the dashboard page

### Extra
* Secret dev menu?
  - Log saved variables
  - Auto Faucet to add hash to tp address
* Metrics/Logging
  - Track errors, performance, etc.