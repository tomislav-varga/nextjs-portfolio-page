/**
 * Cookie consent banner component
 * The main banner that appears when users first visit the site
 */

import React from 'react'
import { Cookie, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CookieBannerProps {
  onAcceptAll: () => void
  onAcceptNecessary: () => void
  onOpenPreferences: () => void
  className?: string
}

export function CookieBanner({
  onAcceptAll,
  onAcceptNecessary,
  onOpenPreferences,
  className,
}: CookieBannerProps) {
  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-[150] bg-background border-t shadow-lg",
        "animate-in slide-in-from-bottom-full duration-300",
        className
      )}
      role="banner"
      aria-label="Cookie consent banner"
    >
      <div className="container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          {/* Icon and Content */}
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            <div className="space-y-2">
              <h3 className="font-semibold text-sm">Wir respektieren Ihre Privatsphäre</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                Wir verwenden Cookies, um Ihr Browsererlebnis zu verbessern, personalisierte Inhalte 
                bereitzustellen und unseren Traffic zu analysieren. Sie können wählen, welche Cookies Sie zulassen möchten. 
                {' '}
                <button
                  onClick={onOpenPreferences}
                  className="underline hover:no-underline text-primary"
                >
                  Erfahren Sie mehr über unsere Cookie-Richtlinie
                </button>
                .
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <button
              onClick={onOpenPreferences}
              className={cn(
                "inline-flex items-center justify-center gap-2 px-4 py-2 text-sm",
                "border rounded-md hover:bg-secondary transition-colors",
                "w-full sm:w-auto whitespace-nowrap"
              )}
            >
              <Settings className="h-4 w-4" />
              Einstellungen
            </button>
            
            <button
              onClick={onAcceptNecessary}
              className={cn(
                "px-4 py-2 text-sm border rounded-md hover:bg-secondary transition-colors",
                "w-full sm:w-auto whitespace-nowrap"
              )}
            >
              Nur Notwendige
            </button>
            
            <button
              onClick={onAcceptAll}
              className={cn(
                "px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md",
                "hover:bg-primary/90 transition-colors",
                "w-full sm:w-auto whitespace-nowrap"
              )}
            >
              Alle Akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
