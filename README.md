# portfolio
## Deployment
 1. `git clone git@github.com:StevenStreller/portfolio.git portfolio && cd portfolio`
 2. Ports in der `docker-compose.yml` anpassen. Standardeinstellung ist, dass ein Reverse-Proxy die Aufrufe leitet. Sollte Portfolio als Standalone ausgeführt werden, `expose`-Tree entfernen und `ports` ("80:80" und "443:443") in `docker-compose.yml` hinzufügen
 3. `docker-compose -p portfolio up -d`
