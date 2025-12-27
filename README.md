# Portfolio - Jon-Steven Streller

Portfolio-Website gebaut mit Vite, Bootstrap.

## Entwicklung

Für die lokale Entwicklung mit Hot-Reload:

```bash
docker run --rm -it -v "$PWD":/app -w /app -p 5173:5173 node:20 bash -c "npm install && npm run dev"
```

Der Dev-Server läuft auf `http://localhost:5173`

## Production Build

### Docker Image bauen

```bash
docker build -t portfolio:latest .
```

### Container starten

```bash
docker run -d --name portfolio -p 8080:80 portfolio:latest
```

Die Website ist dann unter `http://localhost:8080` erreichbar.

### Container stoppen und entfernen

```bash
docker stop portfolio
docker rm portfolio
```
