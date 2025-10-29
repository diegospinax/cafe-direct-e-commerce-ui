"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { ProductCard } from "@/components/product-card"
import { FilterSidebar } from "@/components/filter-sidebar"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal, MapPin, Users } from "lucide-react"

const products = [
  {
    id: "1",
    name: "Etiopía Yirgacheffe",
    origin: "Etiopía",
    notes: ["Floral", "Cítrico", "Té"],
    price: 24,
    image: "/ethiopian-coffee-bag-premium-dark.jpg",
    intensity: 3,
  },
  {
    id: "2",
    name: "Colombia Supremo",
    origin: "Colombia",
    notes: ["Chocolate", "Caramelo", "Nuez"],
    price: 22,
    image: "/colombian-coffee-bag-premium-dark.jpg",
    intensity: 4,
  },
  {
    id: "3",
    name: "Brasil Santos",
    origin: "Brasil",
    notes: ["Chocolate", "Avellana", "Dulce"],
    price: 20,
    image: "/brazilian-coffee-bag-premium-dark.jpg",
    intensity: 4,
  },
  {
    id: "4",
    name: "Costa Rica Tarrazú",
    origin: "Costa Rica",
    notes: ["Cítrico", "Miel", "Brillante"],
    price: 26,
    image: "/costa-rican-coffee-bag-premium-dark.jpg",
    intensity: 3,
  },
  {
    id: "5",
    name: "Guatemala Antigua",
    origin: "Guatemala",
    notes: ["Chocolate", "Especias", "Floral"],
    price: 25,
    image: "/guatemalan-coffee-bag-premium-dark.jpg",
    intensity: 5,
  },
  {
    id: "6",
    name: "Kenia AA",
    origin: "Kenia",
    notes: ["Frutal", "Vino", "Cítrico"],
    price: 28,
    image: "/kenyan-coffee-bag-premium-dark.jpg",
    intensity: 4,
  },
]

export default function Home() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background z-10" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url(/hero-coffee-beans-dark.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-20 text-center space-y-8 px-4 animate-fade-in-up">
          <h1 className="font-serif text-6xl md:text-8xl font-light text-foreground tracking-tight">Café de Origen</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre los sabores únicos de las mejores regiones cafeteras del mundo
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base">
            Explorar Catálogo
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="text-xs text-muted-foreground tracking-widest">SCROLL</div>
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="font-serif text-4xl font-light text-foreground mb-2">Nuestros Cafés</h2>
            <p className="text-muted-foreground">Selección premium de orígenes únicos</p>
          </div>
          <Button variant="outline" className="lg:hidden bg-transparent" onClick={() => setIsFilterOpen(true)}>
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            Filtros
          </Button>
        </div>

        <div className="flex gap-8">
          <FilterSidebar isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />

          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: "forwards" }}
                >
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Origins Section */}
      <section id="origins" className="container mx-auto px-4 lg:px-8 py-20 border-t border-border">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl font-light text-foreground mb-4">Nuestros Orígenes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trabajamos directamente con productores de las mejores regiones cafeteras del mundo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              region: "Etiopía",
              description: "Cuna del café, con perfiles florales y afrutados únicos",
              altitude: "1,800 - 2,200 msnm",
            },
            {
              region: "Colombia",
              description: "Cafés balanceados con notas de chocolate y caramelo",
              altitude: "1,200 - 1,800 msnm",
            },
            {
              region: "Brasil",
              description: "Producción sostenible con sabores dulces y achocolatados",
              altitude: "800 - 1,300 msnm",
            },
            {
              region: "Costa Rica",
              description: "Cafés brillantes con acidez cítrica y cuerpo medio",
              altitude: "1,200 - 1,700 msnm",
            },
            {
              region: "Guatemala",
              description: "Perfiles complejos con notas especiadas y florales",
              altitude: "1,300 - 2,000 msnm",
            },
            {
              region: "Kenia",
              description: "Cafés vibrantes con acidez de vino y notas frutales",
              altitude: "1,400 - 2,000 msnm",
            },
          ].map((origin, index) => (
            <div
              key={origin.region}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: "forwards" }}
            >
              <MapPin className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-2xl font-light text-foreground mb-2">{origin.region}</h3>
              <p className="text-muted-foreground mb-4">{origin.description}</p>
              <div className="text-sm text-muted-foreground/70">Altitud: {origin.altitude}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 lg:px-8 py-20 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl font-light text-foreground mb-4">Nosotros</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conectamos a los amantes del café con los mejores productores del mundo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-xl font-light text-foreground mb-2">Comercio Directo</h3>
                  <p className="text-muted-foreground">
                    Trabajamos directamente con productores, eliminando intermediarios y asegurando precios justos
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-xl font-light text-foreground mb-2">Trazabilidad Total</h3>
                  <p className="text-muted-foreground">
                    Cada lote es rastreable hasta la finca de origen, garantizando calidad y transparencia
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-6 w-6 text-primary mt-1 flex-shrink-0 font-serif text-xl">☕</div>
                <div>
                  <h3 className="font-serif text-xl font-light text-foreground mb-2">Calidad Premium</h3>
                  <p className="text-muted-foreground">
                    Seleccionamos únicamente cafés de especialidad con puntuaciones superiores a 85 puntos
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-6 w-6 text-primary mt-1 flex-shrink-0 font-serif text-xl">🌱</div>
                <div>
                  <h3 className="font-serif text-xl font-light text-foreground mb-2">Sostenibilidad</h3>
                  <p className="text-muted-foreground">
                    Promovemos prácticas agrícolas sostenibles que protegen el medio ambiente y las comunidades
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <p className="text-lg text-muted-foreground italic">
              "Nuestro compromiso es llevar el mejor café del mundo a tu taza, mientras apoyamos a las comunidades
              productoras y protegemos el planeta"
            </p>
            <div className="mt-4 text-sm text-muted-foreground">— Equipo CaféDirect</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-serif text-xl font-light mb-4 text-foreground">CaféDirect</h3>
              <p className="text-sm text-muted-foreground">Café premium de origen directo a tu hogar</p>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-4 text-foreground">Comprar</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Catálogo</li>
                <li>Suscripciones</li>
                <li>Regalos</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-4 text-foreground">Ayuda</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Envíos</li>
                <li>Devoluciones</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-4 text-foreground">Contacto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>hola@cafedirect.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2025 CaféDirect. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
