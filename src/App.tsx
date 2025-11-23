import React from 'react'
import './App.css'

const languageFocus = [
  {
    title: 'Polski',
    sounds: 'Samogłoski nosowe; spółgłoski szumiące (sz, ż, cz, dż)',
    muscles: 'język (przód + środek), mięśnie policzkowe, podniebienie miękkie',
    drills: ['Świsty i szelesty (sz – s – sz)', 'Zawijanie języka do podniebienia przy „cz”', 'Nosem/ustnie – kontrasty samogłosek nosowych'],
  },
  {
    title: 'Angielski',
    sounds: '/θ/ /ð/ /r/',
    muscles: 'czubek języka + zęby sieczne, żuchwa (kontrola opuszczenia), wargi zaokrąglone',
    drills: ['Bez-dźwięczne gryzienie języka przy /θ/', 'Minimal pairs: think/sink, those/doze', 'Płynne /r/ z kontrolą warg (read, road)'],
  },
  {
    title: 'Niemiecki',
    sounds: 'Umlauty (ä, ö, ü); gardłowe „R” [ʁ] + „ch” (ich/ach)',
    muscles: 'tył języka + języczek podniebienny, wargi wysunięte, kontrola oddechu',
    drills: ['Płukanie gardła → gʁ gʁ gʁ → ra re ri ro ru', 'Przegłosy: szerokie „I” → wysunięte „Ü”', 'Miękkie „ch” przy podniebieniu: ich, Mädchen'],
  },
]

const diagnostics = [
  {
    title: 'Baseline audio test',
    description:
      'Krótka lista słów/łosów dla każdego dźwięku; rejestrujemy nagranie startowe jako punkt odniesienia.',
  },
  {
    title: 'Autopercepcja',
    description: 'Użytkownik zaznacza, które dźwięki sprawiają trudność (suwaki/checkboxy), aby algorytm dobrał ścieżkę.',
  },
  {
    title: 'Subiektywna ankieta',
    description:
      'Kilka pytań o cel: redukcja akcentu, dyslalia, rehabilitacja poudarowa. Wynik wpływa na tempo i feedback.',
  },
]

const mvpExercises = [
  'Polski: kontrasty sz–s–sz + wizualizacja ułożenia języka (statyczna + animacja).',
  'Polski: samogłoski nosowe – pary minimalne + wskaźnik przepływu powietrza (grafika strumienia).',
  'Angielski: /θ/ /ð/ z kamerą ust (rysunek) i animacją dotyku języka o siekacze.',
  'Angielski: płynne /r/ z kontrolą zaokrąglenia warg (animacja).',
  'Niemiecki: gardłowe „R” [ʁ] + przegłosy (ä, ö, ü) z animacją płukania gardła i przejścia I → Ü.',
]

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <div>
          <p className="eyebrow">MVP — trening wymowy z naciskiem na aparat mowy</p>
          <h1>
            DeutschFonetyka: webowa aplikacja do ćwiczeń wymowy dla polskiego, angielskiego i niemieckiego
          </h1>
          <p className="lede">
            Multimedialne lekcje (tekst + audio + animacja) z wizualizacją mięśni i adaptacyjną ścieżką dla dyslalii,
            redukcji akcentu i rehabilitacji poudarowej.
          </p>
          <div className="tags">
            <span className="tag">Web (desktop/tablet)</span>
            <span className="tag">Ćwiczenia artykulacyjne</span>
            <span className="tag">Tryb dziecięcy + RODO/COPPA</span>
          </div>
        </div>
      </header>

      <section className="panel">
        <div className="panel-header">
          <div>
            <p className="eyebrow">Trzy języki na start</p>
            <h2>Dźwięki priorytetowe i mięśnie, które wizualizujemy</h2>
            <p className="muted">Każda karta = zestaw ćwiczeń + animacja ruchu języka/warg + audio wzorcowe.</p>
          </div>
        </div>
        <div className="grid">
          {languageFocus.map((item) => (
            <article key={item.title} className="card">
              <div className="card-header">
                <div className="pill">{item.title}</div>
                <h3>{item.sounds}</h3>
              </div>
              <p className="muted">Zaangażowane mięśnie: {item.muscles}</p>
              <ul>
                {item.drills.map((drill) => (
                  <li key={drill}>{drill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="panel two-column">
        <div>
          <p className="eyebrow">Diagnostyka startowa</p>
          <h2>Test audio + autopercepcja + krótka ankieta</h2>
          <p className="muted">
            Uruchamiamy trzy-elementowy onboarding: kalibrator mikrofonu, baseline audio test (nagranie),
            autopercepcja i ankieta. To pozwala natychmiast dobrać ścieżkę dla trzech profili użytkownika.
          </p>
          <div className="grid small">
            {diagnostics.map((item) => (
              <article key={item.title} className="chip-card">
                <h4>{item.title}</h4>
                <p className="muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="panel-highlight">
          <p className="eyebrow">Profile użytkowników</p>
          <ul className="checklist">
            <li>Dyslalia — wolniejsze tempo, więcej powtórek, więcej wizualizacji mięśni.</li>
            <li>Redukcja akcentu — feedback „jak blisko native” z precyzyjnym audio wzorcowym.</li>
            <li>Rehabilitacja poudarowa — krótsze serie, kontrola oddechu, większe elementy UI.</li>
          </ul>
          <div className="badge">Onboarding: zgody RODO/COPPA + kalibracja mikrofonu</div>
        </div>
      </section>

      <section className="panel">
        <div className="panel-header">
          <div>
            <p className="eyebrow">Ćwiczenia artykulacyjne</p>
            <h2>Tekst + audio + animacja postaci z podglądem pracy mięśni</h2>
            <p className="muted">
              Dla każdej głoski pokazujemy animację ruchu języka/warg oraz grafiki logopedyczne (open source/własne),
              by użytkownik wiedział, które mięśnie pracują i jak kontrolować oddech.
            </p>
          </div>
        </div>
        <div className="pill-row">
          <span className="pill">Animacja 2D aparatu mowy</span>
          <span className="pill">Audio wzorcowe + nagranie użytkownika</span>
          <span className="pill">Instrukcja w formie gry (krótkie podpowiedzi)</span>
          <span className="pill">Statyczne grafiki mięśni (open source / własne)</span>
        </div>
      </section>

      <section className="panel two-column">
        <div>
          <p className="eyebrow">Ocena wymowy i koszty</p>
          <h2>Start z minimalnym kosztem (open source), potem ewentualny zakup licencji</h2>
          <p className="muted">
            Proponuję pipeline: open-source ASR (np. Whisper/Coqui) + scoring „zbliżenia do wzorca native”
            (procentowy wskaźnik + kolor). Działa online — placówki mają internet, więc utrzymujemy prostą
            infrastrukturę webową.
          </p>
          <ul className="checklist">
            <li>Metryka: jak bardzo nagranie przypomina wzorzec native (procent + opis słowny).</li>
            <li>Feedback: podświetlenie elementu mięśniowego (np. tył języka dla niem. R) + sugestia ruchu.</li>
            <li>Możliwość późniejszego przełączenia na usługę chmurową, gdy budżet pozwoli.</li>
          </ul>
        </div>
        <div className="panel-highlight">
          <p className="eyebrow">Co mierzymy</p>
          <ul className="metric-list">
            <li><strong>Articulatory fit:</strong> zgodność punktu artykulacji z wzorcem.</li>
            <li><strong>Intelligibility:</strong> czy ASR rozpoznaje słowo/zdanie poprawnie.</li>
            <li><strong>Stabilność:</strong> wahania między powtórkami (pomaga w terapii poudarowej).</li>
          </ul>
        </div>
      </section>

      <section className="panel">
        <div className="panel-header">
          <div>
            <p className="eyebrow">MVP — 3–5 ćwiczeń</p>
            <h2>Szybki zakres startowy (web)</h2>
            <p className="muted">Startujemy bez panelu terapeuty, ale z jasnym feedbackiem „jak blisko native”.</p>
          </div>
        </div>
        <ol className="ordered">
          {mvpExercises.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <section className="panel callout">
        <div>
          <p className="eyebrow">Kolejne kroki</p>
          <h2>Potrzebujemy grafik/animacji + potwierdzenia testów</h2>
          <p className="muted">
            Jeśli możesz, wskaż materiały (PDF/obrazy) z ćwiczeniami aparatu mowy, które możemy wykorzystać jako własne lub
            open source. Wersja webowa pozwala na szybkie testy w szkołach i placówkach rehab. bez trybu offline.
          </p>
          <div className="pill-row">
            <span className="pill">Dostarcz grafiki lub autorskie materiały</span>
            <span className="pill">Potwierdź: baseline audio + autopercepcja + ankieta</span>
            <span className="pill">Wybierz 1–2 animacje do startu (np. niem. R + ang. /θ/)</span>
          </div>
        </div>
      </section>
    </div>
  )
}
