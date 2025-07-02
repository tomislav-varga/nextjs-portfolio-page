/**
 * Cookie preferences modal component
 * Allows users to control granular cookie settings
 */

'use client'

import React, { useState } from 'react'
import { X } from 'lucide-react'
import { CookiePreferences } from './cookie-storage'
import { cn } from '@/lib/utils'

interface CookiePreferencesModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (preferences: Partial<CookiePreferences>) => void
  currentPreferences: CookiePreferences
}

export function CookiePreferencesModal({
  isOpen,
  onClose,
  onSave,
  currentPreferences,
}: CookiePreferencesModalProps) {
  const [tempPreferences, setTempPreferences] = useState<CookiePreferences>(currentPreferences)

  if (!isOpen) return null

  const handleSave = () => {
    onSave(tempPreferences)
  }

  const handleToggle = (category: keyof CookiePreferences) => {
    if (category === 'necessary') return // Can't disable necessary cookies
    
    setTempPreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }))
  }

  return (
    <div className="fixed inset-0 z-[200] bg-black/50 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold">Cookie-Einstellungen</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-md transition-colors"
            aria-label="Schließen"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="prose prose-sm max-w-none">
            <p>
              Wir verwenden Cookies, um Ihr Browsererlebnis zu verbessern, personalisierte Inhalte 
              bereitzustellen und unseren Traffic zu analysieren. Durch Klicken auf "Alle Akzeptieren" 
              stimmen Sie der Verwendung von Cookies zu.
            </p>
          </div>

          {/* Cookie Categories */}
          <div className="space-y-4">
            {/* Necessary Cookies */}
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">Notwendige Cookies</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">Immer Aktiv</span>
                  <div className="w-10 h-6 bg-primary rounded-full relative">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Diese Cookies sind für das ordnungsgemäße Funktionieren der Website unerlässlich. 
                Sie ermöglichen grundlegende Funktionen wie Seitennavigation und Zugang zu sicheren Bereichen.
              </p>
            </div>

            {/* Analytics Cookies */}
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">Analyse-Cookies</h3>
                <button
                  onClick={() => handleToggle('analytics')}
                  className={cn(
                    "w-10 h-6 rounded-full relative transition-colors",
                    tempPreferences.analytics ? "bg-primary" : "bg-secondary"
                  )}
                >
                  <div className={cn(
                    "absolute top-1 w-4 h-4 bg-white rounded-full transition-transform",
                    tempPreferences.analytics ? "right-1" : "left-1"
                  )} />
                </button>
              </div>
              <p className="text-sm text-muted-foreground">
                Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, 
                indem sie Informationen anonym sammeln und melden.
              </p>
            </div>

            {/* Marketing Cookies */}
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">Marketing-Cookies</h3>
                <button
                  onClick={() => handleToggle('marketing')}
                  className={cn(
                    "w-10 h-6 rounded-full relative transition-colors",
                    tempPreferences.marketing ? "bg-primary" : "bg-secondary"
                  )}
                >
                  <div className={cn(
                    "absolute top-1 w-4 h-4 bg-white rounded-full transition-transform",
                    tempPreferences.marketing ? "right-1" : "left-1"
                  )} />
                </button>
              </div>
              <p className="text-sm text-muted-foreground">
                Diese Cookies werden verwendet, um Ihnen relevantere Werbung und Inhalte zu zeigen. 
                Sie können auch verwendet werden, um die Anzahl der Werbeanzeigen zu begrenzen, die Sie sehen.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end space-x-3 p-6 border-t bg-secondary/50">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm border rounded-md hover:bg-secondary transition-colors"
          >
            Abbrechen
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Einstellungen Speichern
          </button>
        </div>
      </div>
    </div>
  )
}
