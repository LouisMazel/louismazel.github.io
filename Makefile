.PHONY: help test build

clean: ## Clean node modules
	rm -rf ./server/node_modules
	rm -rf ./front/node_modules

reinstall: ## Reinstall dependencies without package-lock.json
	cd ./server && npm i
	cd ./front && npm i

install: ## Install node modules
	cd ./server && npm ci
	cd ./front && npm ci

serve: ## Run dev server
	ttab 'cd ./server; npm run start' && ttab 'cd ./front; npm run serve'

build: ## Build front
	cd ./front && npm run build

dev: start ## Alias of start

start: clean install serve ## Install node modules, build app and run dev server
