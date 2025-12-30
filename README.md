# Portfolio - Jon-Steven Streller

Portfolio-Website gebaut mit Vite, Bootstrap 5.

## Voraussetzungen

- Docker (für containerisierte Entwicklung)
- Make (optional, für vereinfachte Befehle)

## Entwicklung

### Mit Make

```bash
make install    # Dependencies installieren
make dev        # Dev-Server starten (http://localhost:5173)
make build      # Production Build erstellen
make format     # Code mit Prettier formatieren
make test       # Format-Check + Build
```

### Manuell mit Docker

Für die lokale Entwicklung mit Hot-Reload:

```bash
docker run --rm -it -v "$PWD":/app -w /app -p 5173:5173 node:20 bash -c "npm install && npm run dev"
```

Der Dev-Server läuft auf `http://localhost:5173`

## Production Build

### Image von GitHub Container Registry verwenden

```bash
docker pull ghcr.io/steven-streller/portfolio:latest
docker run -d --name portfolio -p 8080:8080 ghcr.io/steven-streller/portfolio:latest
```

Alternativ mit Branch-Tag:

```bash
docker pull ghcr.io/steven-streller/portfolio:main
```

### Eigenes Docker Image bauen

Mit Make:

```bash
make docker-build          # Image bauen
make docker-run-prod       # Container starten
```

Manuell:

```bash
docker build -t portfolio:latest .
docker run -d --name portfolio -p 8080:8080 portfolio:latest
```

Die Website ist dann unter `http://localhost:8080` erreichbar.

### Container stoppen und entfernen

```bash
docker stop portfolio
docker rm portfolio
```

## Verfügbare Make-Targets

```bash
make help           # Alle verfügbaren Targets anzeigen
make install        # Dependencies installieren
make dev            # Development-Server starten
make build          # Production Build
make preview        # Production Build lokal testen
make format         # Code formatieren (Prettier)
make format-check   # Formatierung prüfen
make test           # Tests ausführen (format-check + build)
make clean          # Build-Artefakte löschen
make docker-build   # Docker Image bauen
make docker-run     # Dev-Container starten
make deploy         # Build + Docker Image erstellen
```
