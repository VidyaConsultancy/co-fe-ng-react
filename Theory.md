# Angular

## Angular development env setup/npm
npm package
- locally
- globally
npm install @angular/cli@10
npm install --global @angular/cli
ng new <project_name>

npx => executable npm
npx @angular/cli@10 new <project_name>

npm install --save-dev package-name

## Angular Decorators
- @Component - components
- @NgModule - Angular module
- @Directive - Directive
- @Pipe - Pipe
- @Injectable - Service

## ng cli
**generate a module with routing**
`npx ng g m auth --routing --route auth --module app.module`

## Angular Service
**providedIn** metadata
- `root` - service will be singleton
- `platform` - service will be singleton among more than one angular app running in the same window
- `any` - singleton service for eagerly loaded modules and singletone service for each lazily loaded modules
