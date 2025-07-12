/**
 * Privacy Settings Page
 * Allows users to modify their cookie preferences after initial consent
 */

'use client'

import React from 'react'
import { useCookieConsent } from '@/components/cookie-consent'
import { CookiePreferencesModal } from '@/components/cookie-consent/cookie-preferences'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'

export default function PrivacyPage() {
    const {
        preferences,
        showPreferences,
        openPreferences,
        closePreferences,
        saveCustomPreferences,
        resetConsent,
    } = useCookieConsent()

    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                <div className="container mx-auto py-12 px-4 max-w-4xl">
                    <div className="space-y-8">
                        {/* Header */}
                        <div>
                            <h1 className="text-3xl font-bold">Datenschutz-Einstellungen</h1>
                            <p className="text-muted-foreground mt-2">
                                Verwalten Sie Ihre Cookie-Einstellungen und Datenschutzoptionen.
                            </p>
                        </div>        {/* Current Settings */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold">Aktuelle Cookie-Einstellungen</h2>
                            <div className="grid gap-4">
                                <div className="flex items-center justify-between p-4 border rounded-lg">
                                    <div>
                                        <h3 className="font-medium">Notwendige Cookies</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Wesentlich für die Website-Funktionalität
                                        </p>
                                    </div>
                                    <span className="text-sm bg-primary text-primary-foreground px-2 py-1 rounded">
                                        Immer Aktiv
                                    </span>
                                </div>

                                <div className="flex items-center justify-between p-4 border rounded-lg">
                                    <div>
                                        <h3 className="font-medium">Analyse-Cookies</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Helfen uns, die Website-Nutzung zu verstehen
                                        </p>
                                    </div>
                                    <span className={`text-sm px-2 py-1 rounded ${preferences.analytics
                                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
                                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
                                        }`}>
                                        {preferences.analytics ? 'Aktiviert' : 'Deaktiviert'}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between p-4 border rounded-lg">
                                    <div>
                                        <h3 className="font-medium">Marketing-Cookies</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Personalisierte Inhalte und Werbung
                                        </p>
                                    </div>
                                    <span className={`text-sm px-2 py-1 rounded ${preferences.marketing
                                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
                                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
                                        }`}>
                                        {preferences.marketing ? 'Aktiviert' : 'Deaktiviert'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap gap-3">
                            <button
                                onClick={openPreferences}
                                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                            >
                                Einstellungen Ändern
                            </button>
                            <button
                                onClick={resetConsent}
                                className="px-4 py-2 border rounded-md hover:bg-secondary transition-colors"
                            >
                                Alle Einstellungen Zurücksetzen
                            </button>
                        </div>

                        {/* Consent Information */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold">Einverständnis-Informationen</h2>
                            <div className="bg-secondary/50 p-4 rounded-lg space-y-2">
                                <p className="text-sm">
                                    <strong>Einverständnis-Datum:</strong> {new Date(preferences.timestamp).toLocaleDateString('de-DE')}
                                </p>
                                <p className="text-sm">
                                    <strong>Richtlinien-Version:</strong> {preferences.version}
                                </p>
                            </div>
                        </div>

                        {/* Privacy Policy Info */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold">Datenschutz-Informationen</h2>
                            <div className="prose prose-sm max-w-none dark:prose-invert">
                                <p>
                                    Wir respektieren Ihre Privatsphäre und verpflichten uns, Ihre persönlichen Daten zu schützen.
                                    Unsere Verwendung von Cookies hilft uns, Ihnen ein besseres Erlebnis beim Besuch unserer Website zu bieten.
                                </p>
                                <h3>Cookie-Kategorien:</h3>
                                <ul>
                                    <li><strong>Notwendig:</strong> Erforderlich für grundlegende Website-Funktionalität</li>
                                    <li><strong>Analyse:</strong> Helfen uns zu verstehen, wie Besucher unsere Website nutzen</li>
                                    <li><strong>Marketing:</strong> Werden verwendet, um relevante Inhalte und Werbung zu zeigen</li>
                                </ul>
                                <p>
                                    Sie können Ihre Einstellungen jederzeit ändern. Änderungen werden sofort wirksam.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Preferences Modal */}
            <CookiePreferencesModal
                isOpen={showPreferences}
                onClose={closePreferences}
                onSave={saveCustomPreferences}
                currentPreferences={preferences}
            />

            <Footer />
        </>
    )
}
