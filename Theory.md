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

**generate guard**
`npx ng g guard guards/auth/auth`

## Angular Service
**providedIn** metadata
- `root` - service will be singleton
- `platform` - service will be singleton among more than one angular app running in the same window
- `any` - singleton service for eagerly loaded modules and singletone service for each lazily loaded modules


# Git

## Git areas
working area => git add [files]
staging area => git commit
committed changes

## Git combine changes
- git merge command
  - git checkout <target-branch>
  - git merge <source-branch>
  the above two commands will take changes from source branch and place them into target branch
  eg. if we need to merge dev branch changes into main then the commands will be
  - git checkout main
  - git merge dev
- git rebase command
  - git checkout <target-branch>
  - git rebase <source-branch>
  eg. if we need to merge main branch changes into dev branch then the commands will be
  - git checkout dev
  - git rebase main
