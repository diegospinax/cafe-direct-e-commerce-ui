"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"

interface ProductCardProps {
  id: string
  name: string
  origin: string
  notes: string[]
  price: number
  image: string
  intensity: number
}

export function ProductCard({ name, origin, notes, price, image, intensity }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className={`object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
        />

        <Button
          size="icon"
          className={`absolute bottom-4 right-4 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <ShoppingCart className="h-4 w-4" />
        </Button>
      </div>

      <div className="p-6 space-y-3">
        <div className="space-y-1">
          <h3 className="font-serif text-xl font-medium text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground">{origin}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {notes.map((note) => (
            <span key={note} className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
              {note}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Intensidad:</span>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`h-1 w-6 rounded-full ${i < intensity ? "bg-primary" : "bg-border"}`} />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-2xl font-serif font-medium text-foreground">${price}</span>
          <span className="text-xs text-muted-foreground">250g</span>
        </div>
      </div>
    </Card>
  )
}
