"use client"

import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/project-card"
import { CarouselDots } from "../ui/carousel-dots"
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
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

  useEffect(() => {
    if (!emblaApi) return

    const autoplayInterval = 5000
    let autoplayTimer: NodeJS.Timeout

    const autoplay = () => {
      clearTimeout(autoplayTimer)
      autoplayTimer = setTimeout(() => {
        if (!emblaApi.canScrollNext()) {
          emblaApi.scrollTo(0)
        } else {
          emblaApi.scrollNext()
        }
        autoplay()
      }, autoplayInterval)
    }

    autoplay()

    // Stop autoplay on user interaction
    const onMouseEnter = () => clearTimeout(autoplayTimer)
    const onMouseLeave = () => autoplay()

    const rootNode = emblaApi.rootNode()
    rootNode.addEventListener('mouseenter', onMouseEnter)
    rootNode.addEventListener('mouseleave', onMouseLeave)

    return () => {
      clearTimeout(autoplayTimer)
      if (rootNode) {
        rootNode.removeEventListener('mouseenter', onMouseEnter)
        rootNode.removeEventListener('mouseleave', onMouseLeave)
      }
    }
  }, [emblaApi])

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ausgewählte Projekte</h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            Hier sind einige meiner neuesten Projekte. Jedes wurde mit Fokus auf
            Benutzererfahrung, Leistung und sauberen Code entwickelt.
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
          <CarouselDots selectedIndex={selectedIndex} slideCount={projects.length} onDotClick={(index) => emblaApi?.scrollTo(index)} />
        </div>
      </div>
    </section>
  )
}