.PHONY: help install dev build preview format format-check clean docker-build docker-run test test-html test-links test-security test-lighthouse

# Default target
help:
	@echo "Available targets:"
	@echo "  make install        - Install dependencies"
	@echo "  make dev            - Start development server"
	@echo "  make build          - Build for production"
	@echo "  make preview        - Preview production build"
	@echo "  make format         - Format code with Prettier"
	@echo "  make format-check   - Check code formatting"
	@echo "  make clean          - Clean build artifacts"
	@echo "  make docker-build   - Build Docker image"
	@echo "  make docker-run     - Run in Docker container"
	@echo "  make test           - Run tests (build + format check)"

# Install dependencies
install:
	docker run --rm -v "$$PWD":/app -w /app node:25 npm install

# Start development server
dev:
	docker run --rm -it -v "$$PWD":/app -w /app -p 5173:5173 node:25 npm run dev
# Build for production
build:
	docker run --rm -v "$$PWD":/app -w /app node:25 npm run build

# Preview production build
preview:
	docker run --rm -it -v "$$PWD":/app -w /app -p 4173:4173 node:25 npm run preview

# Format code
format:
	docker run --rm -v "$$PWD":/app -w /app node:25 npm run format

# Check formatting
format-check:
	docker run --rm -v "$$PWD":/app -w /app node:25 npm run format:check
# Clean build artifacts
clean:
	rm -rf dist node_modules

# Build Docker image
docker-build:
	docker build -t portfolio:latest .

# Run in Docker container (dev mode)
docker-run:
	docker run --rm -it -v "$$(pwd)":/app -w /app -p 5173:5173 node:25 bash -c "npm install && npm run dev"

# Run production Docker image
docker-run-prod:
	docker run --rm -p 8080:80 portfolio:latest

# Run tests (format check + build)
test: format-check build
	@echo "✅ All tests passed"

# Deploy (build + docker build)
deploy: docker-build
	@echo "✅ Ready for deployment"