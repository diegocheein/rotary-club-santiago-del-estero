"use client";

import Image from "next/image";
import {
  Heart,
  GraduationCap,
  Users,
  Leaf,
  Menu,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { useState } from "react";
import { cn } from "@/lib/utils";

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

const navLinks = [
  { label: "Quiénes somos", href: "#nosotros" },
  { label: "Áreas de enfoque", href: "#proyectos" },
  { label: "Nuestro impacto", href: "#impacto" },
  { label: "Contacto", href: "/contacto" },
];

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ── Navigation ── */}
      <header className="sticky top-0 z-50 border-b border-rotary-navy/10 bg-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-6 md:py-4">
          <a href="#" className="flex items-center">
            <Image
              src="/images/rotary-logo.png"
              alt="Logo Rotary Club Santiago del Estero"
              width={300}
              height={163}
              className="h-[100px] w-auto md:h-[140px]"
              priority
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-foreground transition-colors hover:text-rotary-blue"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="ml-2 inline-flex items-center rounded-full bg-rotary-navy px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-rotary-blue"
            >
              Sumate al club
            </a>
          </div>

          {/* Mobile nav */}
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
                  href="#contacto"
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

      <main>
        {/* ── Hero ── */}
        <section className="bg-rotary-navy py-16 md:py-28">
          <div className="mx-auto max-w-4xl px-6 text-center animate-fade-in">
            <div className="mb-8 inline-flex items-center rounded-full border border-white/15 bg-white/8 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-rotary-gold/90">
              Desde 1931 — Distrito 4851
            </div>
            <h1 className="font-heading text-[28px] leading-snug text-white sm:text-4xl md:text-[44px] md:leading-snug lg:text-[52px]">
              Más de 90 años transformando{" "}
              <br className="hidden sm:block" />
              Santiago del Estero
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg md:leading-relaxed">
              Somos el primer club Rotary de la provincia. Una red de vecinos
              comprometidos con el servicio a la comunidad a través de proyectos
              concretos de educación, salud y desarrollo.
            </p>
            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="#proyectos"
                className="inline-flex items-center rounded-full bg-rotary-gold px-7 py-3 text-sm font-bold text-rotary-navy transition-colors hover:bg-rotary-gold-light"
              >
                Conocé nuestras áreas de enfoque
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#nosotros"
                className="inline-flex items-center rounded-full border border-white/30 px-7 py-3 text-sm font-medium text-white/90 transition-colors hover:bg-white/10"
              >
                Qué es Rotary
              </a>
            </div>
          </div>
        </section>

        {/* ── Quiénes somos ── */}
        <section id="nosotros" className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-heading text-3xl text-foreground md:text-4xl">
                Quiénes somos
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Rotary reúne a personas de acción que comparten una misma
                visión: dar de sí antes de pensar en sí. Nuestro club fue
                fundado el 15 de octubre de 1931, siendo el primero de la
                provincia de Santiago del Estero.
              </p>
            </div>

            <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  Durante más de nueve décadas, hemos trabajado junto a
                  instituciones, organizaciones y vecinos para responder a las
                  necesidades más urgentes de nuestra comunidad. Desde
                  programas educativos hasta campañas de salud, cada proyecto
                  refleja el compromiso de nuestros socios con el servicio.
                </p>
                <p>
                  Como parte del Distrito 4851 de Rotary International,
                  formamos parte de una red global de 1,4 millones de socios
                  en más de 200 países y regiones, unidos por el ideal de
                  servicio por encima del beneficio personal.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-rotary-gray p-8">
                <h3 className="font-heading text-xl text-foreground">
                  La Prueba Cuádruple
                </h3>
                <p className="mt-2 mb-5 text-sm text-muted-foreground">
                  De lo que pensamos, decimos o hacemos:
                </p>
                <ol className="space-y-4 text-foreground">
                  {[
                    "¿Es la verdad?",
                    "¿Es equitativo para todos los interesados?",
                    "¿Creará buena voluntad y mejores amistades?",
                    "¿Será beneficioso para todos los interesados?",
                  ].map((q, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-rotary-navy text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      <span className="pt-0.5">{q}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* ── Áreas de enfoque ── */}
        <section id="proyectos" className="bg-rotary-gray py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-heading text-3xl text-foreground md:text-4xl">
                Áreas de enfoque
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Concentramos nuestros esfuerzos en las áreas donde podemos
                generar un impacto real y duradero en nuestra comunidad.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {[
                {
                  icon: Heart,
                  title: "Salud comunitaria",
                  text: "Organizamos campañas de prevención, jornadas de atención médica y brindamos apoyo a instituciones de salud de nuestra ciudad.",
                  color: "bg-rotary-cranberry",
                },
                {
                  icon: GraduationCap,
                  title: "Educación",
                  text: "Promovemos becas a través de la Fundación Rotary, programas de apoyo escolar e intercambios juveniles que abren puertas.",
                  color: "bg-rotary-blue",
                },
                {
                  icon: Users,
                  title: "Desarrollo comunitario",
                  text: "Trabajamos junto a organizaciones barriales, parroquias e instituciones locales para fortalecer el tejido social.",
                  color: "bg-rotary-navy",
                },
                {
                  icon: Leaf,
                  title: "Medio ambiente",
                  text: "Impulsamos proyectos de forestación, limpieza de espacios públicos y programas de educación ambiental.",
                  color: "bg-rotary-green",
                },
              ].map((item) => (
                <Card key={item.title} className="h-full border border-border bg-white shadow-none transition-shadow hover:shadow-md">
                  <CardContent className="p-7">
                    <div
                      className={cn(
                        "mb-4 flex h-11 w-11 items-center justify-center rounded-full",
                        item.color
                      )}
                    >
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── Impact Numbers ── */}
        <section id="impacto" className="relative overflow-hidden bg-rotary-navy py-20 md:py-24">
          {/* Logo watermark */}
          <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 opacity-[0.06]" aria-hidden="true">
            <Image
              src="/images/rotary-logo.png"
              alt=""
              width={400}
              height={218}
              className="h-64 w-auto brightness-0 invert md:h-80"
            />
          </div>
          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <h2 className="font-heading text-3xl text-white md:text-4xl">
              Nuestro impacto en números
            </h2>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
              {[
                { number: "93+", label: "Años de servicio ininterrumpido" },
                { number: "1931", label: "Año de fundación" },
                { number: "4851", label: "Distrito Rotary" },
                { number: "1,4M", label: "Socios Rotary en el mundo" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-4xl text-rotary-gold md:text-5xl">
                    {stat.number}
                  </p>
                  <p className="mt-3 text-sm leading-snug text-white/75">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Quote ── */}
        <section className="relative overflow-hidden bg-white py-20 md:py-28">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]" aria-hidden="true">
            <Image
              src="/images/rotary-logo.png"
              alt=""
              width={500}
              height={272}
              className="h-72 w-auto md:h-96"
            />
          </div>
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <div className="mx-auto mb-8 h-1 w-16 rounded-full bg-rotary-gold" />
            <blockquote className="font-heading text-2xl leading-relaxed text-foreground md:text-3xl md:leading-relaxed">
              &ldquo;Dar de sí antes de pensar en sí.&rdquo;
            </blockquote>
            <p className="mt-4 text-muted-foreground">
              — Lema de Rotary International
            </p>
            <p className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Ser rotario significa asumir un compromiso con la comunidad. No se
              trata de reconocimiento personal, sino de estar presente donde se
              nos necesita y actuar con integridad. Ese es el espíritu que nos
              guía desde 1931.
            </p>
          </div>
        </section>

        {/* ── CTA / Contact ── */}
        <section id="contacto" className="bg-rotary-gray py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-heading text-3xl text-foreground md:text-4xl">
              Participá en Rotary
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Si compartís nuestros valores y querés contribuir al bienestar de
              Santiago del Estero, te invitamos a conocernos. Rotary está
              abierto a personas de todas las edades y con vocación de servicio.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="/contacto"
                className="inline-flex items-center rounded-full bg-rotary-navy px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-rotary-blue"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contactanos
              </a>
              <a
                href="https://www.facebook.com/rotaryclubsde"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border-2 border-rotary-navy px-7 py-3 text-sm font-bold text-rotary-navy transition-colors hover:bg-rotary-navy hover:text-white"
              >
                <FacebookIcon className="mr-2 h-4 w-4" />
                Seguinos en Facebook
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Santiago del Estero, Argentina</span>
            </div>
          </div>
        </section>
      </main>

      {/* ── Links bar ── */}
      <div className="bg-rotary-navy py-6">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-4 px-6 sm:flex-row sm:gap-12">
          <a
            href="/contacto"
            className="text-sm font-bold text-white transition-colors hover:text-rotary-gold"
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
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
              <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5zm7.25-.75a.75.75 0 01.75-.75h3.5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l5.47-5.47H12.25a.75.75 0 01-.75-.75z" clipRule="evenodd" />
            </svg>
          </a>
          <a
            href="https://endpolio.org/es"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-white transition-colors hover:text-rotary-gold"
          >
            Pongamos Fin a la Polio
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
              <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5zm7.25-.75a.75.75 0 01.75-.75h3.5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l5.47-5.47H12.25a.75.75 0 01-.75-.75z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>

      {/* ── Footer ── */}
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

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </>
  );
}
