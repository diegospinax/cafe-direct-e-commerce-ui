"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Minus, Plus, X, Tag } from "lucide-react"

interface CartItem {
  id: string
  name: string
  origin: string
  price: number
  quantity: number
  image: string
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Etiopía Yirgacheffe",
      origin: "Etiopía",
      price: 24,
      quantity: 2,
      image: "/ethiopian-coffee-bag-premium-dark.jpg",
    },
    {
      id: "2",
      name: "Colombia Supremo",
      origin: "Colombia",
      price: 22,
      quantity: 1,
      image: "/colombian-coffee-bag-premium-dark.jpg",
    },
  ])

  const [couponCode, setCouponCode] = useState("")

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item)),
    )
  }

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 50 ? 0 : 5
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 lg:px-8 pt-32 pb-20">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="font-serif text-4xl font-light text-foreground mb-2">Tu Carrito</h1>
          <p className="text-muted-foreground">{cartItems.length} productos seleccionados</p>
        </div>

        {cartItems.length === 0 ? (
          <Card className="p-12 text-center bg-card border-border">
            <p className="text-muted-foreground mb-4">Tu carrito está vacío</p>
            <Link href="/">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Explorar Productos</Button>
            </Link>
          </Card>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item, index) => (
                <Card
                  key={item.id}
                  className="p-6 bg-card border-border animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex gap-6">
                    <div className="relative w-24 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-secondary">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>

                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-serif text-lg font-medium text-foreground">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">{item.origin}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-muted-foreground hover:text-destructive"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 bg-secondary rounded-lg p-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.id, -1)}
                            className="h-8 w-8 text-foreground hover:bg-background"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="text-sm font-medium text-foreground w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.id, 1)}
                            className="h-8 w-8 text-foreground hover:bg-background"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        <div className="text-right">
                          <div className="font-serif text-xl font-medium text-foreground">
                            ${item.price * item.quantity}
                          </div>
                          <div className="text-xs text-muted-foreground">${item.price} c/u</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card
                className="p-6 bg-card border-border sticky top-24 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <h2 className="font-serif text-xl font-medium text-foreground mb-6">Resumen del Pedido</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Input
                      placeholder="Código de descuento"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                    />
                    <Button variant="outline" size="icon" className="flex-shrink-0 border-border bg-transparent">
                      <Tag className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-3 py-4 border-t border-b border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Envío</span>
                    <span className="text-foreground">{shipping === 0 ? "Gratis" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Impuestos</span>
                    <span className="text-foreground">${tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center py-4">
                  <span className="font-serif text-lg font-medium text-foreground">Total</span>
                  <span className="font-serif text-2xl font-medium text-foreground">${total.toFixed(2)}</span>
                </div>

                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 mb-3">
                  Proceder al Pago
                </Button>

                <Link href="/">
                  <Button
                    variant="outline"
                    className="w-full border-border text-foreground hover:bg-secondary bg-transparent"
                  >
                    Continuar Comprando
                  </Button>
                </Link>

                {shipping > 0 && (
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Envío gratis en compras mayores a $50
                  </p>
                )}
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
