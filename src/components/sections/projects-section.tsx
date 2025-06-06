"use client"

import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/project-card"
import useEmblaCarousel from 'embla-carousel-react'
import {  useCallback, useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function ProjectsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false, 
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  })
  
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    
    onSelect()
    
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            Here are some of my recent projects. Each one was built with a focus on
            user experience, performance, and clean code.
          </p>
        </div>
        
        <div className="relative">
          {/* Carousel container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {projects.map((project) => (
                <div 
                  key={project.title} 
                  className="flex-[0_0_100%] min-w-0 px-3 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={scrollPrev} 
              disabled={!prevBtnEnabled}
              className="rounded-full"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={scrollNext} 
              disabled={!nextBtnEnabled}
              className="rounded-full"
              aria-label="Next project"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: projects.length - 2 }).map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === selectedIndex 
                    ? 'bg-primary' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}