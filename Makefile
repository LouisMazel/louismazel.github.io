.PHONY: help test build

clean: ## Clean node modules
	rm -rf ./db/node_modules
	rm -rf ./app/dist
	rm -rf ./app/node_modules

reinstall: ## Reinstall dependencies without package-lock.json
	cd ./db && npm i
	cd ./app && npm i

install: ## Install node modules
	cd ./db && npm ci
	cd ./app && npm ci

serve: ## Run dev server
	ttab 'cd ./db; npm run serve' && ttab 'cd ./app; npm run serve'

build: ## Build app
	cd ./app && npm run build

dev: start ## Alias of start

start: clean install serve ## Install node modules, build app and run dev server
