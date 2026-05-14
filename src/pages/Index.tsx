import SiteNav from "@/components/SiteNav";
import heroImage from "@/assets/hero-massage.jpg";
import portrait from "@/assets/portrait.jpg";
import texture from "@/assets/texture.jpg";

const services = [
  {
    title: "Helende Verbinding Massage",
    subtitle: "Jouw unieke geboortereis",
    body:
      "De ervaringen en emoties uit je pre- en perinatale periode zijn in je cellen opgeslagen en kunnen een diepe imprint achterlaten. Deze zachte massage herstelt de verbinding in jezelf en met anderen, zodat er ruimte ontstaat voor verandering.",
  },
  {
    title: "Dharma Shamanic System",
    subtitle: "Traditionele helende kracht",
    body:
      "Een zuivere, natuurlijke manier van helen die je levensenergie weer vrij laat stromen. Gebaseerd op methoden van Tibetaanse en Aboriginal sjamanen. Helpt bij het loslaten van stress, angst en emotioneel lijden.",
  },
  {
    title: "Reconnective Healing®",
    subtitle: "Frequenties van licht en informatie",
    body:
      "Deze vorm van healing activeert je zelfhelende vermogen via frequenties van energie, licht en informatie. Je wordt niet aangeraakt; veel mensen ervaren na afloop diepe rust en helderheid.",
  },
  {
    title: "Klassieke Massage",
    subtitle: "Voor lichamelijk & geestelijk welbevinden",
    body:
      "Gun jezelf een massage die volledig is afgestemd op wat jij nodig hebt. Voel hoe spanning wegsmelt en je spieren ontspannen — een liefdevol cadeau aan jezelf in elke fase van je leven.",
  },
  {
    title: "Shantala Babymassage",
    subtitle: "Voor baby's van 6 weken tot 9 maanden",
    body:
      "Ik begeleid ouders in het liefdevol aanraken en masseren van hun baby. Een prachtige, laagdrempelige manier om samen te ontspannen en jullie band te versterken.",
  },
  {
    title: "Training hand- & hoofdmassage",
    subtitle: "Voor zorgmedewerkers & mantelzorgers",
    body:
      "Leer op een fijne, respectvolle manier mensen benaderen die warme en aandachtsvolle aanraking hard nodig hebben. Een waardevolle aanvulling op je werk in de zorg.",
  },
];

const testimonials = [
  {
    quote:
      "Na één sessie voelde ik een diepe rust die ik in jaren niet meer had ervaren. Ariëlle werkt met enorme sensitiviteit.",
    name: "Marieke",
    role: "Cliënt",
  },
  {
    quote:
      "De zachte aanpak en wijze begeleiding hebben mij geholpen om weer in contact te komen met mezelf. Hartverwarmend.",
    name: "Joost",
    role: "Cliënt",
  },
  {
    quote:
      "Een sessie bij Ariëlle is een geschenk. Ik kwam binnen met spanning en vertrok met helderheid en energie.",
    name: "Sanne",
    role: "Cliënt",
  },
];

const Index = () => {
  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteNav />

      {/* HERO */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Rustgevende praktijkruimte met kaarsen, lavendel en zachte handdoeken"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="relative container-prose pt-32 pb-20 text-primary-foreground">
          <div className="max-w-2xl animate-[fade-up_1s_ease-out]">
            <p className="eyebrow text-primary-foreground/80">
              <span className="inline-block w-10 h-px bg-primary-foreground/60 align-middle mr-3" />
              Praktijk Ariëlle van Son
            </p>
            <h1 className="font-display text-5xl md:text-7xl mt-6 leading-[1.05]">
              Kom thuis<br />
              <em className="italic font-light">in jezelf.</em>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-primary-foreground/90 max-w-xl font-light">
              Massage, energetische therapie en bewustzijn — voor volwassenen,
              kinderen en baby's. Met aandacht, respect en zorg ondersteun ik
              graag jouw persoonlijk welzijn.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-primary-foreground text-primary text-xs uppercase tracking-[0.25em] font-medium hover:bg-primary-foreground/90 transition-all hover:translate-y-[-2px] shadow-elevated"
              >
                Plan een sessie
              </a>
              <a
                href="#behandelingen"
                className="inline-flex items-center px-8 py-4 border border-primary-foreground/60 text-primary-foreground text-xs uppercase tracking-[0.25em] font-medium hover:bg-primary-foreground/10 transition-colors"
              >
                Bekijk behandelingen
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 text-xs uppercase tracking-[0.3em] flex flex-col items-center gap-2">
          <span>Scroll</span>
          <span className="w-px h-10 bg-primary-foreground/40 animate-pulse" />
        </div>
      </section>

      {/* INTRO QUOTE STRIP */}
      <section className="bg-secondary py-20">
        <div className="container-prose text-center">
          <p className="eyebrow"><span className="divider-line" />Welkom<span className="divider-line" /></p>
          <p className="font-display italic text-2xl md:text-4xl text-primary mt-6 max-w-3xl mx-auto leading-snug">
            "Het doel van een sessie is dat je meer harmonie, ontspanning, rust
            en levensenergie ervaart."
          </p>
        </div>
      </section>

      {/* OVER MIJ */}
      <section id="over" className="py-24 md:py-32">
        <div className="container-prose grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden shadow-elevated">
              <img
                src={portrait}
                alt="Ariëlle van Son, therapeut"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 md:-right-12 bg-background p-6 md:p-8 shadow-soft max-w-[260px] hidden sm:block">
              <p className="font-display italic text-primary text-xl leading-snug">
                "De pure, helende energie via mijn handen is een hartverwarmende ervaring."
              </p>
            </div>
          </div>
          <div>
            <p className="eyebrow">Over mij</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4">
              Een praktijk vol aandacht, voor elke levensfase.
            </h2>
            <p className="mt-6 text-foreground/80 leading-relaxed">
              Met aandacht, respect en zorg ondersteun ik graag jouw persoonlijk
              welzijn. Je kunt bij mij terecht als je niet lekker in je vel zit,
              je lichamelijk, geestelijk of emotioneel meer in balans wilt
              komen, je stress of angst wilt verminderen, of bij lichamelijke
              klachten en pijn.
            </p>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              Ik werk intuïtief en met een groot invoelend vermogen. In het
              contact met jou kijken we samen naar wat jij op dat moment nodig
              hebt — zodat de sessie precies bij jou past.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {[
                "Rust & bewustwording",
                "Diepe ontspanning",
                "In contact met jezelf",
                "Inzichten & helderheid",
                "Eigenwaarde voelen",
                "Energie & balans",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2 text-foreground/80">
                  <span className="text-gold mt-1">✦</span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BEHANDELINGEN */}
      <section id="behandelingen" className="py-24 md:py-32 bg-gradient-soft">
        <div className="container-prose">
          <div className="text-center mb-16">
            <p className="eyebrow"><span className="divider-line" />Mijn aanbod<span className="divider-line" /></p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4">
              Behandelingen op maat
            </h2>
            <p className="mt-6 text-foreground/70 max-w-2xl mx-auto">
              Iedere sessie is uniek en stem ik volledig op jou af. Hieronder
              vind je een overzicht van mijn behandelingen — twijfel je welke
              passend is? Neem gerust contact op.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border shadow-soft">
            {services.map((s, i) => (
              <article
                key={s.title}
                className="bg-background p-10 hover:bg-secondary/60 transition-colors duration-500 group"
              >
                <p className="font-display text-gold/80 text-2xl">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-2xl text-foreground mt-3 group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs uppercase tracking-[0.2em] text-primary/70 mt-2">
                  {s.subtitle}
                </p>
                <p className="mt-5 text-foreground/75 text-sm leading-relaxed">
                  {s.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ERVARINGEN */}
      <section id="ervaringen" className="py-24 md:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url(${texture})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container-prose relative">
          <div className="text-center mb-16">
            <p className="eyebrow"><span className="divider-line" />Ervaringen<span className="divider-line" /></p>
            <h2 className="font-display text-4xl md:text-5xl mt-4">
              Wat cliënten ervaren
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="bg-background p-10 shadow-soft border-t-2 border-gold/60"
              >
                <p className="font-display text-3xl text-primary leading-none">"</p>
                <blockquote className="mt-2 font-display italic text-xl text-foreground/85 leading-snug">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 text-xs uppercase tracking-[0.2em] text-foreground/60">
                  {t.name} · {t.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* TARIEVEN / PRAKTISCH */}
      <section id="tarieven" className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="container-prose grid md:grid-cols-2 gap-16">
          <div>
            <p className="eyebrow text-primary-foreground/70">Praktisch</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4">
              Tarieven & sessies
            </h2>
            <p className="mt-6 text-primary-foreground/80 max-w-md">
              Een sessie duurt circa 60 tot 90 minuten en wordt volledig
              afgestemd op jouw vraag. Pakketten en combinatiesessies zijn op
              aanvraag mogelijk.
            </p>
          </div>
          <div className="space-y-6">
            {[
              { name: "Intake & eerste sessie", time: "90 min", price: "€ 95" },
              { name: "Vervolgsessie volwassenen", time: "60–75 min", price: "€ 75" },
              { name: "Shantala Babymassage (3 lessen)", time: "3 × 45 min", price: "€ 120" },
              { name: "Training hand- & hoofdmassage", time: "op aanvraag", price: "—" },
            ].map((p) => (
              <div
                key={p.name}
                className="flex items-baseline justify-between gap-4 pb-4 border-b border-primary-foreground/20"
              >
                <div>
                  <p className="font-display text-xl">{p.name}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 mt-1">
                    {p.time}
                  </p>
                </div>
                <p className="font-display text-2xl text-primary-foreground">{p.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 md:py-32">
        <div className="container-prose grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4">
              Maak tijd voor jezelf.
            </h2>
            <p className="mt-6 text-foreground/75">
              Wil je een sessie inplannen of heb je een vraag? Stuur gerust een
              bericht. Ik neem binnen één werkdag contact met je op.
            </p>
            <div className="mt-10 space-y-5 text-foreground/80">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-primary/80">Telefoon</p>
                <a href="tel:+31600000000" className="font-display text-2xl link-underline">+31 6 00 00 00 00</a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-primary/80">E-mail</p>
                <a href="mailto:info@arielle-vanson.nl" className="font-display text-2xl link-underline">
                  info@arielle-vanson.nl
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-primary/80">Praktijk</p>
                <p className="font-display text-2xl">Praktijkadres, Nederland</p>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = "mailto:info@arielle-vanson.nl";
            }}
            className="bg-secondary p-8 md:p-12 shadow-soft space-y-5"
          >
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-primary/80">Naam</label>
              <input
                required
                type="text"
                className="w-full mt-2 bg-transparent border-b border-foreground/20 py-2 focus:border-primary outline-none transition-colors"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-primary/80">E-mail</label>
              <input
                required
                type="email"
                className="w-full mt-2 bg-transparent border-b border-foreground/20 py-2 focus:border-primary outline-none transition-colors"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-primary/80">Bericht</label>
              <textarea
                required
                rows={5}
                className="w-full mt-2 bg-transparent border-b border-foreground/20 py-2 focus:border-primary outline-none transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-[0.25em] hover:bg-primary/90 transition-all hover:translate-y-[-2px]"
            >
              Verstuur bericht
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-plum-deep text-primary-foreground/80 py-14">
        <div className="container-prose grid md:grid-cols-3 gap-8 items-start">
          <div>
            <p className="font-display text-2xl text-primary-foreground">Ariëlle van Son</p>
            <p className="mt-2 text-sm text-primary-foreground/60">
              Massage · Energetische therapie · Bewustzijn
            </p>
          </div>
          <div className="text-sm">
            <p className="uppercase tracking-[0.2em] text-xs text-primary-foreground/60 mb-3">Praktijk</p>
            <p>Op afspraak — di t/m za</p>
            <p>Aangesloten bij beroepsvereniging</p>
          </div>
          <div className="text-sm">
            <p className="uppercase tracking-[0.2em] text-xs text-primary-foreground/60 mb-3">Contact</p>
            <a className="block link-underline" href="mailto:info@arielle-vanson.nl">info@arielle-vanson.nl</a>
            <a className="block link-underline mt-1" href="tel:+31600000000">+31 6 00 00 00 00</a>
          </div>
        </div>
        <div className="container-prose mt-10 pt-6 border-t border-primary-foreground/10 text-xs text-primary-foreground/50 flex flex-wrap justify-between gap-4">
          <p>© {new Date().getFullYear()} Ariëlle van Son. Alle rechten voorbehouden.</p>
          <p>Met zorg gemaakt — voor wie tijd voor zichzelf maakt.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
