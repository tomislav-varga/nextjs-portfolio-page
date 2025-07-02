/**
 * Main cookie consent component
 * Orchestrates the banner and preferences modal
 */

'use client'

import React from 'react'
import { CookieBanner } from './cookie-banner'
import { CookiePreferencesModal } from './cookie-preferences'
import { useCookieConsent } from './use-cookie-consent'

interface CookieConsentProps {
  className?: string
}

export function CookieConsent({ className }: CookieConsentProps) {
  const {
    showBanner,
    showPreferences,
    preferences,
    isLoading,
    acceptAll,
    acceptNecessary,
    openPreferences,
    closePreferences,
    saveCustomPreferences,
  } = useCookieConsent()

  // Don't render anything while loading
  if (isLoading) {
    return null
  }

  return (
    <>
      {/* Cookie Banner */}
      {showBanner && (
        <CookieBanner
          onAcceptAll={acceptAll}
          onAcceptNecessary={acceptNecessary}
          onOpenPreferences={openPreferences}
          className={className}
        />
      )}

      {/* Preferences Modal */}
      <CookiePreferencesModal
        isOpen={showPreferences}
        onClose={closePreferences}
        onSave={saveCustomPreferences}
        currentPreferences={preferences}
      />
    </>
  )
}

// Export all the utilities for use in other parts of the app
export { useCookieConsent } from './use-cookie-consent'
export { hasConsentFor, type CookieCategory, type CookiePreferences } from './cookie-storage'
