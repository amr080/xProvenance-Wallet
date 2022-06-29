// ---------
// API URLS
// ---------
export const SERVICE_MOBILE_WALLET_TESTNET = process.env.REACT_APP_SERVICE_MOBILE_WALLET_TESTNET;
export const SERVICE_MOBILE_WALLET_MAINNET = process.env.REACT_APP_SERVICE_MOBILE_WALLET_MAINNET;
export const ADDRESS_URL = '/address';
export const PRICING_URL = `${SERVICE_MOBILE_WALLET_MAINNET}/pricing`;
export const STATISTICS_URL = `${SERVICE_MOBILE_WALLET_MAINNET}/statistics`;
export const MARKER_URL = `${PRICING_URL}/marker`;
// ---------------------
// INNER-APP PATH URLS
// ---------------------
// ROOT HOMEPAGE URL
export const APP_URL = '/';
// NEW ACCOUNT (ADD/CREATE/RECOVER)
const NEW_ACCOUNT_SEED_INFO = '/seed';
const NEW_ACCOUNT_SEED_VALUE = `${NEW_ACCOUNT_SEED_INFO}/value`;
const NEW_ACCOUNT_SEED_VERIFY = `${NEW_ACCOUNT_SEED_INFO}/verify`;
const NEW_ACCOUNT_SEED_INPUT = `${NEW_ACCOUNT_SEED_INFO}/input`;
const NEW_ACCOUNT_PASSWORD = '/password';
const NEW_ACCOUNT_SUCCESS = '/success';
// - SUB ACCOUNT
export const NEW_ACCOUNT_SUB_URL = '/sub';
export const SUB_ACCOUNT_PASSWORD_URL = `${NEW_ACCOUNT_SUB_URL}${NEW_ACCOUNT_PASSWORD}`;
export const SUB_ACCOUNT_SUCCESS_URL = `${NEW_ACCOUNT_SUB_URL}${NEW_ACCOUNT_SUCCESS}`;
// - CREATE
export const NEW_ACCOUNT_CREATE_URL = '/create';
export const CREATE_ACCOUNT_SEED_INFO_URL = `${NEW_ACCOUNT_CREATE_URL}${NEW_ACCOUNT_SEED_INFO}`;
export const CREATE_ACCOUNT_SEED_VALUE_URL = `${NEW_ACCOUNT_CREATE_URL}${NEW_ACCOUNT_SEED_VALUE}`;
export const CREATE_ACCOUNT_SEED_VERIFY_URL = `${NEW_ACCOUNT_CREATE_URL}${NEW_ACCOUNT_SEED_VERIFY}`;
export const CREATE_ACCOUNT_PASSWORD_URL = `${NEW_ACCOUNT_CREATE_URL}${NEW_ACCOUNT_PASSWORD}`;
export const CREATE_ACCOUNT_SUCCESS_URL = `${NEW_ACCOUNT_CREATE_URL}${NEW_ACCOUNT_SUCCESS}`;
// - RECOVER
export const NEW_ACCOUNT_RECOVER_URL = '/recover';
export const RECOVER_ACCOUNT_SEED_INFO_URL = `${NEW_ACCOUNT_RECOVER_URL}${NEW_ACCOUNT_SEED_INFO}`;
export const RECOVER_ACCOUNT_SEED_INPUT_URL = `${NEW_ACCOUNT_RECOVER_URL}${NEW_ACCOUNT_SEED_INPUT}`;
export const RECOVER_ACCOUNT_PASSWORD_URL = `${NEW_ACCOUNT_RECOVER_URL}${NEW_ACCOUNT_PASSWORD}`;
export const RECOVER_ACCOUNT_SUCCESS_URL = `${NEW_ACCOUNT_RECOVER_URL}${NEW_ACCOUNT_SUCCESS}`;
// - ADD
export const NEW_ACCOUNT_ADD_URL = `/add`;
export const ADD_ACCOUNT_SEED_INFO_URL = `${NEW_ACCOUNT_ADD_URL}${NEW_ACCOUNT_SEED_INFO}`;
export const ADD_ACCOUNT_SEED_VALUE_URL = `${NEW_ACCOUNT_ADD_URL}${NEW_ACCOUNT_SEED_VALUE}`;
export const ADD_ACCOUNT_SEED_VERIFY_URL = `${NEW_ACCOUNT_ADD_URL}${NEW_ACCOUNT_SEED_VERIFY}`;
export const ADD_ACCOUNT_PASSWORD_URL = `${NEW_ACCOUNT_ADD_URL}${NEW_ACCOUNT_PASSWORD}`;
export const ADD_ACCOUNT_SUCCESS_URL = `${NEW_ACCOUNT_ADD_URL}${NEW_ACCOUNT_SUCCESS}`;
// - IMPORT
export const NEW_ACCOUNT_IMPORT_URL = `/import`;
export const IMPORT_ACCOUNT_SEED_INFO_URL = `${NEW_ACCOUNT_IMPORT_URL}${NEW_ACCOUNT_SEED_INFO}`;
export const IMPORT_ACCOUNT_SEED_INPUT_URL = `${NEW_ACCOUNT_IMPORT_URL}${NEW_ACCOUNT_SEED_INPUT}`;
export const IMPORT_ACCOUNT_PASSWORD_URL = `${NEW_ACCOUNT_IMPORT_URL}${NEW_ACCOUNT_PASSWORD}`;
export const IMPORT_ACCOUNT_SUCCESS_URL = `${NEW_ACCOUNT_IMPORT_URL}${NEW_ACCOUNT_SUCCESS}`;
// DASHBOARD URLS
export const DASHBOARD_URL = '/dashboard';
export const DASHBOARD_MENU_URL = `${DASHBOARD_URL}/menu`;
export const DASHBOARD_SEND_URL = `${DASHBOARD_URL}/send`;
export const DASHBOARD_RECEIVE_URL = `${DASHBOARD_URL}/receive`;
export const DASHBOARD_CONNECTION_DETAILS_URL = `${DASHBOARD_URL}/connection`;
// PROFILE URLS
export const PROFILE_URL = '/profile';
export const RESET_WALLETS_URL = '/profile/reset-wallets';
// TRANSACTION URLS
export const TRANSACTIONS_URL = '/transactions';
// ACTIONS URLS
export const ACTIONS_URL = '/actions';
// ASSET URLS
export const ASSET_URL = '/asset/:assetName';
// CONNECTION
export const CONNECT_URL = '/connect';
// UNLOCK URLS
export const UNLOCK_URL = '/unlock';
// NOTIFICATIONS
export const NOTIFICATION_URL = '/notification';

// TODO: Check what ALL_URLS is used for and if it's really needed...
// ALL URLS
export const ALL_URLS = {
  SUB_ACCOUNT_PASSWORD_URL,
  SUB_ACCOUNT_SUCCESS_URL,
  APP_URL,
  ASSET_URL,
  CONNECT_URL,
  CREATE_ACCOUNT_PASSWORD_URL,
  CREATE_ACCOUNT_SEED_INFO_URL,
  CREATE_ACCOUNT_SEED_VALUE_URL,
  CREATE_ACCOUNT_SEED_VERIFY_URL,
  CREATE_ACCOUNT_SUCCESS_URL,
  DASHBOARD_CONNECTION_DETAILS_URL,
  DASHBOARD_MENU_URL,
  DASHBOARD_RECEIVE_URL,
  DASHBOARD_SEND_URL,
  DASHBOARD_URL,
  NEW_ACCOUNT_SUB_URL,
  NEW_ACCOUNT_CREATE_URL,
  NEW_ACCOUNT_RECOVER_URL,
  NOTIFICATION_URL,
  PROFILE_URL,
  RECOVER_ACCOUNT_PASSWORD_URL,
  RECOVER_ACCOUNT_SEED_INFO_URL,
  RECOVER_ACCOUNT_SEED_INPUT_URL,
  RECOVER_ACCOUNT_SUCCESS_URL,
  RESET_WALLETS_URL,
  TRANSACTIONS_URL,
  UNLOCK_URL,
};
