"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8 animate-fade-in-up">
            <h1 className="font-serif text-4xl font-light text-foreground mb-2">
              {isLogin ? "Bienvenido" : "Crear Cuenta"}
            </h1>
            <p className="text-muted-foreground">
              {isLogin ? "Inicia sesión para continuar" : "Únete a nuestra comunidad cafetera"}
            </p>
          </div>

          <Card className="p-8 bg-card border-border animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <form className="space-y-6">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    Nombre completo
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Juan Pérez"
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground">
                  Contraseña
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>

              {isLogin && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-border bg-background checked:bg-primary checked:border-primary"
                    />
                    <span className="text-muted-foreground">Recordarme</span>
                  </label>
                  <Link href="#" className="text-primary hover:text-primary/80 transition-colors">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
              )}

              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6">
                {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">O continuar con</span>
                </div>
              </div>

              <Button
                type="button"
                variant="outline"
                className="w-full border-border text-foreground hover:bg-secondary bg-transparent"
              >
                Continuar como invitado
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">{isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}</span>{" "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                {isLogin ? "Regístrate" : "Inicia sesión"}
              </button>
            </div>
          </Card>

          <div className="mt-8 text-center text-xs text-muted-foreground">
            Al continuar, aceptas nuestros{" "}
            <Link href="#" className="text-primary hover:text-primary/80">
              Términos de Servicio
            </Link>{" "}
            y{" "}
            <Link href="#" className="text-primary hover:text-primary/80">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
