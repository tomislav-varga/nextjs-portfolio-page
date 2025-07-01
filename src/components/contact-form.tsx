"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Cal, { getCalApi } from "@calcom/embed-react"
import { useTheme } from "next-themes"

// Add CalWindow to Window interface
declare global {
  interface Window {
    CalReload?: () => void;
  }
}

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type FormData = z.infer<typeof formSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)
  const { toast } = useToast()
  const { resolvedTheme } = useTheme()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })
  
  // Handle theme changes for the calendar
  useEffect(() => {
    if (showCalendar) {
      try {
        // Force reload of the calendar when theme changes
        if (typeof window !== 'undefined' && window.CalReload) {
          window.CalReload();
          console.log("Cal.com reloaded due to theme change");
        }
      } catch (error) {
        console.error("Error updating Cal.com theme:", error);
      }
    }
  }, [resolvedTheme, showCalendar]);

  // Initialize Cal.com API
  useEffect(() => {
    (async function () {
      try {
        console.log("Initializing Cal.com...");
        const cal = await getCalApi();
        console.log("Cal API initialized:", cal);
        
        // Store the reload function globally for theme changes
        // @ts-ignore - We know these properties exist even if TS doesn't
        if (cal) {
          window.CalReload = () => {
            // @ts-ignore
            if (cal.rerender) cal.rerender();
            console.log("Cal rerendered");
          };
        }
        
        // @ts-ignore - The on method exists but TypeScript doesn't recognize it
        cal?.on?.({
          action: "bookingSuccessful",
          callback: () => {
            toast({
              title: "Terminbuchung erfolgreich!",
              description: "Dein Termin wurde erfolgreich gebucht.",
              variant: "success",
            });
          },
        });
      } catch (error) {
        console.error("Error initializing Cal.com:", error);
      }
    })();
  }, [toast]);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message')
      }

      toast({
        title: "Erfolg!",
        description: "Deine Nachricht wurde erfolgreich gesendet.",
        variant: "success",
      })
      reset()
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Etwas ist schiefgelaufen. Bitte versuche es erneut.'
      
      toast({
        title: "Fehler",
        description: errorMessage,
        variant: "error",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-4" id="contact-form">
      <div className="flex justify-center mb-6">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-l-lg ${!showCalendar 
              ? 'bg-primary text-primary-foreground' 
              : 'bg-card text-muted-foreground hover:bg-secondary hover:text-secondary-foreground'}`}
            onClick={() => setShowCalendar(false)}
          >
            Kontaktformular
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-r-lg ${showCalendar 
              ? 'bg-primary text-primary-foreground' 
              : 'bg-card text-muted-foreground hover:bg-secondary hover:text-secondary-foreground'}`}
            onClick={() => setShowCalendar(true)}
          >
            Terminbuchung
          </button>
        </div>
      </div>

      {!showCalendar ? (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <Input
              id="name"
              {...register("name")}
              className="mt-1"
              placeholder="Dein Name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-Mail
            </label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              className="mt-1"
              placeholder="deine@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Nachricht
            </label>
            <Textarea
              id="message"
              {...register("message")}
              className="mt-1"
              placeholder="Deine Nachricht"
              rows={4}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
            )}
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
          </Button>
        </form>
      ) : (
        <div className="mt-4">
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <Cal
              calLink="tomislav.varga/30min"
              style={{ 
                width: "100%", 
                height: "800px", 
                overflow: "auto"
              }}
              config={{
                layout: "month_view",
                theme: resolvedTheme === "dark" ? "dark" : "light",
                hideEventTypeDetails: "false",
              }}
            />
          </div>
          
          <div className="mt-4 text-sm text-muted-foreground">
            <p>Tipp: Falls der Kalender nicht angezeigt wird, versuche die Seite zu aktualisieren oder wähle einen anderen Webbrowser.</p>
          </div>
        </div>
      )}
    </div>
  )
}