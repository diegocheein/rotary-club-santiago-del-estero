"use client";

import Image from "next/image";
import { useState } from "react";
import { Phone, MapPin, Clock, Send, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5zm7.25-.75a.75.75 0 01.75-.75h3.5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l5.47-5.47H12.25a.75.75 0 01-.75-.75z" clipRule="evenodd" />
    </svg>
  );
}

const navLinks = [
  { label: "Quiénes somos", href: "/#nosotros" },
  { label: "Áreas de enfoque", href: "/#proyectos" },
  { label: "Nuestro impacto", href: "/#impacto" },
  { label: "Contacto", href: "/contacto" },
];

export default function Contacto() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [mobileOpen, setMobileOpen] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/ajax/diego@solucionesdigitales.com.ar", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* ── Same Nav as main page ── */}
      <header className="sticky top-0 z-50 border-b border-rotary-navy/10 bg-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-6 md:py-4">
          <a href="/" className="flex items-center">
            <Image
              src="/images/rotary-logo.png"
              alt="Logo Rotary Club Santiago del Estero"
              width={300}
              height={163}
              className="h-[100px] w-auto md:h-[140px]"
              priority
            />
          </a>

          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-rotary-blue",
                  link.href === "/contacto" ? "text-rotary-blue" : "text-foreground"
                )}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contacto"
              className="ml-2 inline-flex items-center rounded-full bg-rotary-navy px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-rotary-blue"
            >
              Sumate al club
            </a>
          </div>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "lg:hidden"
              )}
              aria-label="Abrir menú"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col gap-6 pt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-semibold text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="/contacto"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center rounded-full bg-rotary-navy px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-rotary-blue"
                >
                  Sumate al club
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </header>

      <main className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-heading text-3xl text-foreground md:text-4xl">
              Comunicate con nosotros
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Queremos conocerte. Completá el formulario y nos pondremos en
              contacto, o visitanos en persona en nuestras reuniones semanales.
            </p>
          </div>

          <div className="mt-14 grid gap-12 md:grid-cols-5 md:gap-16">
            {/* Form */}
            <div className="md:col-span-3">
              {status === "sent" ? (
                <div className="rounded-lg border border-rotary-gold/30 bg-rotary-gold/5 p-8 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-rotary-gold/20">
                    <Send className="h-6 w-6 text-rotary-navy" />
                  </div>
                  <h2 className="font-heading text-xl text-foreground">
                    Mensaje enviado
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Recibimos tu consulta. Te responderemos a la brevedad.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm font-semibold text-rotary-blue hover:underline"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="Nueva consulta desde la web - Rotary Club SDE" />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="nombre" className="mb-1.5 block text-sm font-semibold text-foreground">
                        Nombre
                      </label>
                      <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        required
                        className="w-full rounded-lg border border-border bg-white px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-rotary-blue focus:outline-none focus:ring-2 focus:ring-rotary-blue/20"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="apellido" className="mb-1.5 block text-sm font-semibold text-foreground">
                        Apellido
                      </label>
                      <input
                        id="apellido"
                        name="apellido"
                        type="text"
                        required
                        className="w-full rounded-lg border border-border bg-white px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-rotary-blue focus:outline-none focus:ring-2 focus:ring-rotary-blue/20"
                        placeholder="Tu apellido"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="telefono" className="mb-1.5 block text-sm font-semibold text-foreground">
                        Teléfono
                      </label>
                      <input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        className="w-full rounded-lg border border-border bg-white px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-rotary-blue focus:outline-none focus:ring-2 focus:ring-rotary-blue/20"
                        placeholder="385 ..."
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-foreground">
                        Correo electrónico
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-lg border border-border bg-white px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-rotary-blue focus:outline-none focus:ring-2 focus:ring-rotary-blue/20"
                        placeholder="tu@correo.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="consulta" className="mb-1.5 block text-sm font-semibold text-foreground">
                      Consulta o pregunta
                    </label>
                    <textarea
                      id="consulta"
                      name="consulta"
                      rows={5}
                      required
                      className="w-full resize-none rounded-lg border border-border bg-white px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-rotary-blue focus:outline-none focus:ring-2 focus:ring-rotary-blue/20"
                      placeholder="Contanos en qué podemos ayudarte..."
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-600">
                      Hubo un error al enviar. Por favor intentá de nuevo.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center rounded-full bg-rotary-navy px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-rotary-blue disabled:opacity-60"
                  >
                    {status === "sending" ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Enviar consulta
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Info sidebar */}
            <div className="md:col-span-2">
              <div className="rounded-lg border border-border bg-rotary-gray p-7">
                <h2 className="font-heading text-lg text-foreground">
                  Visitanos en persona
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Estás invitado a conocernos en nuestras reuniones semanales.
                  No necesitás ser socio para participar.
                </p>

                <Separator className="my-5" />

                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rotary-navy">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Reuniones</p>
                      <p className="text-sm text-muted-foreground">
                        Miércoles a las 21:00 hs
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rotary-navy">
                      <MapPin className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Lugar</p>
                      <p className="text-sm text-muted-foreground">
                        Salón de Eventos, Hotel Savoy
                        <br />
                        Peatonal Tucumán 39
                        <br />
                        Santiago del Estero
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="relative mt-6 overflow-hidden rounded-lg border border-border">
                <iframe
                  src="https://maps.google.com/maps?q=Hotel+Savoy+Santiago+del+Estero+Argentina&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Rotary Club Santiago del Estero — Hotel Savoy"
                  className="grayscale-[30%]"
                />
                {/* Logo overlay */}
                <div className="absolute bottom-3 left-3 flex items-center rounded-lg bg-white/95 px-4 py-3 shadow-md backdrop-blur-sm">
                  <Image
                    src="/images/rotary-logo.png"
                    alt="Rotary Club Santiago del Estero"
                    width={140}
                    height={76}
                    className="h-14 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ── Same links bar ── */}
      <div className="bg-rotary-navy py-6">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-4 px-6 sm:flex-row sm:gap-12">
          <a
            href="/contacto"
            className="text-sm font-bold text-rotary-gold"
          >
            Comunicate con nosotros
          </a>
          <a
            href="https://my.rotary.org/es/domui/club/c07293c7-2d6b-4631-bf71-31a4fe0f57ec/details"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-white transition-colors hover:text-rotary-gold"
          >
            Rotary.org
            <ExternalLinkIcon className="h-3.5 w-3.5" />
          </a>
          <a
            href="https://endpolio.org/es"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-white transition-colors hover:text-rotary-gold"
          >
            Pongamos Fin a la Polio
            <ExternalLinkIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* ── Same footer ── */}
      <footer className="bg-white py-5">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/images/rotary-logo.png"
                alt="Rotary Club Santiago del Estero"
                width={100}
                height={54}
                className="h-12 w-auto"
              />
              <span className="hidden text-xs text-muted-foreground md:block">
                © {new Date().getFullYear()} Distrito 4851 · Rotary International
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/rotaryclubsde"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-rotary-blue"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/rotary-club-santiago-del-estero/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-rotary-blue"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground md:hidden">
            © {new Date().getFullYear()} Distrito 4851 · Rotary International
          </p>
        </div>
      </footer>
    </>
  );
}
