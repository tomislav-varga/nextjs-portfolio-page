/**
 * Cookie consent state management hook
 * Handles the banner visibility and user interactions
 */

import { useState, useEffect, useCallback } from 'react'
import {
  CookiePreferences,
  loadCookiePreferences,
  saveCookiePreferences,
  acceptAllCookies,
  acceptNecessaryCookies,
  defaultPreferences,
} from './cookie-storage'

export interface CookieConsentState {
  // Visibility state
  showBanner: boolean
  showPreferences: boolean
  
  // Current preferences
  preferences: CookiePreferences
  
  // Loading state
  isLoading: boolean
  
  // Actions
  acceptAll: () => void
  acceptNecessary: () => void
  openPreferences: () => void
  closePreferences: () => void
  saveCustomPreferences: (prefs: Partial<CookiePreferences>) => void
  resetConsent: () => void
}

export function useCookieConsent(): CookieConsentState {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences)
  const [isLoading, setIsLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  // Ensure we're mounted (hydration safety)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Load existing preferences on mount
  useEffect(() => {
    if (!isMounted) return
    
    const existingPreferences = loadCookiePreferences()
    
    if (existingPreferences) {
      // User has already made a choice
      setPreferences(existingPreferences)
      setShowBanner(false)
    } else {
      // First visit or expired consent - show banner
      setShowBanner(true)
    }
    
    setIsLoading(false)
  }, [isMounted])

  // Accept all cookies
  const acceptAll = useCallback(() => {
    acceptAllCookies()
    const newPreferences = loadCookiePreferences()
    if (newPreferences) {
      setPreferences(newPreferences)
    }
    setShowBanner(false)
    setShowPreferences(false)
  }, [])

  // Accept only necessary cookies
  const acceptNecessary = useCallback(() => {
    acceptNecessaryCookies()
    const newPreferences = loadCookiePreferences()
    if (newPreferences) {
      setPreferences(newPreferences)
    }
    setShowBanner(false)
    setShowPreferences(false)
  }, [])

  // Open preferences modal
  const openPreferences = useCallback(() => {
    setShowPreferences(true)
  }, [])

  // Close preferences modal
  const closePreferences = useCallback(() => {
    setShowPreferences(false)
  }, [])

  // Save custom preferences
  const saveCustomPreferences = useCallback((customPrefs: Partial<CookiePreferences>) => {
    saveCookiePreferences(customPrefs)
    const newPreferences = loadCookiePreferences()
    if (newPreferences) {
      setPreferences(newPreferences)
    }
    setShowBanner(false)
    setShowPreferences(false)
  }, [])

  // Reset consent (for testing or privacy settings)
  const resetConsent = useCallback(() => {
    localStorage.removeItem('cookie-consent-preferences')
    setPreferences(defaultPreferences)
    setShowBanner(true)
    setShowPreferences(false)
  }, [])

  return {
    showBanner,
    showPreferences,
    preferences,
    isLoading,
    acceptAll,
    acceptNecessary,
    openPreferences,
    closePreferences,
    saveCustomPreferences,
    resetConsent,
  }
}
