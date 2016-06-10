# [diggit](https://diggit.herokuapp.com/)
I'm building this app to gain a better understanding of AngularJS (v1). I started by following [J. Cole Morrison's guide for configuring Angular within a Rails app](http://start.jcolemorrison.com/setting-up-an-angularjs-and-rails-4-1-project/). Then I copied over some very basic Angular code from a previous project to list posts and enable voting. 

## Goals for this project:
- refactor the pre-existing front-end logic into Angular services and directives
- practice setting up Rails API endpoints
- learn how to integrate external API's with Angular
- practice Angular user auth
- practice Bootstrap and general front-end 

## Installation (WIP) (if you want to run the app locally)

1. Clone the repo to your computer.
2. Run ```bundler install``` from your terminal.
3. Run ```rake db:create & rake db:migrate```.
4. (optional) Run ```rake db:seed``` if you want to populate with sample data.
5. Run ```rails server```.
6. Go to ```http://localhost:3000/``` in your browser.

### Dependencies (WIP)
- Ruby
- Rails
- postgres
- npm (? think this is handled by gem but need to test)
