# DeutschFonetyka (React + TypeScript + Vite)

Webowa aplikacja do ćwiczeń wymowy (PL/EN/DE) z multimedialnym feedbackiem.

## Uruchomienie w środowisku „Logopeda”

1. Zainstaluj zależności z publicznego rejestru NPM (przy problemach 403 patrz sekcja poniżej):

   ```bash
   npm install --registry=https://registry.npmjs.org
   ```

2. Uruchom aplikację w trybie Logopeda (Vite mode = `logopeda`):

   ```bash
   npm run dev:logopeda
   ```

   Domyślnie Vite wystartuje na porcie `5173`. Jeśli korzystasz z tunelu/hostowania, dodaj `--host`.

3. Zmienne środowiskowe dla trybu Logopeda są w pliku `.env.logopeda` (np. `VITE_APP_ENV=logopeda`).

## Jak naprawić błąd `npm ERR! 403 Forbidden`

- Wymuś publiczny rejestr:

  ```bash
  npm config set registry https://registry.npmjs.org
  npm install
  ```

- Usuń błędne ustawienia proxy (błąd „Unknown env config \"http-proxy\"”):

  ```bash
  npm config delete proxy
  npm config delete https-proxy
  unset NPM_CONFIG_HTTP_PROXY NPM_CONFIG_HTTPS_PROXY HTTP_PROXY HTTPS_PROXY
  ```

- Jeżeli w sieci wymagane jest proxy, upewnij się, że adres jest poprawny i wspiera HTTPS.

Po usunięciu błędnych proxy i ustawieniu rejestru instalacja powinna przejść poprawnie.
