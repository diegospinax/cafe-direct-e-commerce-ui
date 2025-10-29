"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { X } from "lucide-react"

interface FilterSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function FilterSidebar({ isOpen, onClose }: FilterSidebarProps) {
  const [priceRange, setPriceRange] = useState([0, 100])
  const [selectedOrigins, setSelectedOrigins] = useState<string[]>([])
  const [selectedIntensity, setSelectedIntensity] = useState<number[]>([])

  const origins = ["Colombia", "Brasil", "Etiopía", "Costa Rica", "Guatemala", "Kenia"]
  const roastLevels = ["Claro", "Medio", "Oscuro"]

  const toggleOrigin = (origin: string) => {
    setSelectedOrigins((prev) => (prev.includes(origin) ? prev.filter((o) => o !== origin) : [...prev, origin]))
  }

  const toggleIntensity = (level: number) => {
    setSelectedIntensity((prev) => (prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]))
  }

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-background/80 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-20 left-0 h-[calc(100vh-5rem)] w-80 bg-card border-r border-border z-50 overflow-y-auto transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="p-6 space-y-8">
          <div className="flex items-center justify-between lg:hidden">
            <h2 className="text-lg font-serif font-medium text-foreground">Filtros</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-foreground">Origen</h3>
            <div className="space-y-2">
              {origins.map((origin) => (
                <label key={origin} className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedOrigins.includes(origin)}
                    onChange={() => toggleOrigin(origin)}
                    className="rounded border-border bg-background checked:bg-primary checked:border-primary"
                  />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {origin}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-foreground">Tostado</h3>
            <div className="space-y-2">
              {roastLevels.map((level) => (
                <label key={level} className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    className="rounded border-border bg-background checked:bg-primary checked:border-primary"
                  />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {level}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-foreground">Intensidad</h3>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((level) => (
                <button
                  key={level}
                  onClick={() => toggleIntensity(level)}
                  className={`h-10 w-10 rounded-full border transition-all ${
                    selectedIntensity.includes(level)
                      ? "bg-primary border-primary text-primary-foreground"
                      : "border-border text-muted-foreground hover:border-primary/50"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-foreground">Precio</h3>
            <Slider value={priceRange} onValueChange={setPriceRange} max={100} step={5} className="w-full" />
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>

          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Aplicar Filtros</Button>
        </div>
      </aside>
    </>
  )
}
