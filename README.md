# Portfolio - Jon-Steven Streller

Portfolio-Website gebaut mit Vite, Bootstrap.

## Entwicklung

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
