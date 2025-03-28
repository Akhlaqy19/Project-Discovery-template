import { URL_CONFIG } from '../constants/config';

/**
 * Validates if the given string is a valid URL
 * @param {string} value - The URL string to validate
 * @returns {boolean} - True if the URL is valid, false otherwise
 */
export const isValidUrl = (value) => {
  try {
    new URL(value);
    return true;
  } catch (err) {
    return false;
  }
};

/**
 * Constructs the full URL for monitoring
 * @param {string} domain - The domain to monitor
 * @returns {string} - The complete URL
 */
export const getMonitorUrl = (domain) => {
  const { BASE_URL, REDIRECT_URL, DEFAULT_DOMAIN } = URL_CONFIG;
  const targetDomain = domain || DEFAULT_DOMAIN;
  return `${BASE_URL}/sign-in?redirect_url=${encodeURIComponent(`${REDIRECT_URL}?domain=${targetDomain}`)}`;
}; 