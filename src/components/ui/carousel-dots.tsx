import React from 'react'

interface CarouselDotsProps {
  selectedIndex: number
  slideCount: number
  onDotClick: (index: number) => void
}

export function CarouselDots({ 
  selectedIndex, 
  slideCount, 
  onDotClick 
}: CarouselDotsProps) {
  // Limit dot count for better UX when there are many slides
  const visibleDotCount = Math.min(slideCount, 5)
  
  return (
    <div className="flex justify-center gap-2 mt-4">
      {Array.from({ length: visibleDotCount }).map((_, index) => (
        <button
          key={index}
          type="button"
          className={`w-2 h-2 rounded-full transition-colors ${
            index === selectedIndex 
              ? 'bg-primary' 
              : 'bg-primary/30 hover:bg-primary/50'
          }`}
          onClick={() => onDotClick(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  )
}