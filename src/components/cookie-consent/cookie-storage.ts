/**
 * Cookie consent storage utilities
 * Handles localStorage operations for cookie preferences
 */

export type CookieCategory = 'necessary' | 'analytics' | 'marketing'

export interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  timestamp: number
  version: string
}

const COOKIE_CONSENT_KEY = 'cookie-consent-preferences'
const CONSENT_VERSION = '1.0' // Update this when privacy policy changes

/**
 * Default cookie preferences
 * Necessary cookies are always required
 */
export const defaultPreferences: CookiePreferences = {
  necessary: true, // Always true - legally required cookies
  analytics: false,
  marketing: false,
  timestamp: Date.now(),
  version: CONSENT_VERSION,
}

/**
 * Save cookie preferences to localStorage
 */
export function saveCookiePreferences(preferences: Partial<CookiePreferences>): void {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') return
  
  try {
    const fullPreferences: CookiePreferences = {
      ...defaultPreferences,
      ...preferences,
      necessary: true, // Always enforce necessary cookies
      timestamp: Date.now(),
      version: CONSENT_VERSION,
    }

    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(fullPreferences))
    
    // Dispatch custom event for other parts of the app to listen to
    window.dispatchEvent(new CustomEvent('cookieConsentChanged', {
      detail: fullPreferences
    }))
  } catch (error) {
    console.warn('Failed to save cookie preferences:', error)
  }
}

/**
 * Load cookie preferences from localStorage
 */
export function loadCookiePreferences(): CookiePreferences | null {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') return null
  
  try {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!stored) return null

    const preferences = JSON.parse(stored) as CookiePreferences
    
    // Check if consent is still valid (version matches)
    if (preferences.version !== CONSENT_VERSION) {
      // Privacy policy updated, need new consent
      clearCookiePreferences()
      return null
    }

    // Check if consent is expired (optional - 1 year expiry)
    const oneYear = 365 * 24 * 60 * 60 * 1000
    if (Date.now() - preferences.timestamp > oneYear) {
      clearCookiePreferences()
      return null
    }

    return preferences
  } catch (error) {
    console.warn('Failed to load cookie preferences:', error)
    return null
  }
}

/**
 * Clear stored cookie preferences
 */
export function clearCookiePreferences(): void {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') return
  
  try {
    localStorage.removeItem(COOKIE_CONSENT_KEY)
  } catch (error) {
    console.warn('Failed to clear cookie preferences:', error)
  }
}

/**
 * Check if user has given consent for a specific category
 */
export function hasConsentFor(category: CookieCategory): boolean {
  const preferences = loadCookiePreferences()
  if (!preferences) return false
  
  return preferences[category]
}

/**
 * Accept all cookies
 */
export function acceptAllCookies(): void {
  saveCookiePreferences({
    necessary: true,
    analytics: true,
    marketing: true,
  })
}

/**
 * Accept only necessary cookies
 */
export function acceptNecessaryCookies(): void {
  saveCookiePreferences({
    necessary: true,
    analytics: false,
    marketing: false,
  })
}
