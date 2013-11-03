It's a work in-progress so don't use this on your live site or clients work. 

## TODO

### `theme.liquid` markup
+ layout

### Liquid snippets
+ customer folder?


#### Features

+ ~~Multiple currencies~~. [Implemented here.](https://github.com/ajmalafif/shopistrap/commit/1ca7717e56ef07e2472cacab927537890ccdc590)
+ Google/custom fonts
+ Multilingual support (Google Translate?)

## First time setup

1. Run `bower install bootstrap && bower install shopify-skeleton-theme && bower install shopify-jquery-currencies` 
2. Run `npm install`

For better workflow, best to setup your `shopify_theme` gem required file - `config.yml` inside `theme` folder: [shopify_theme github repo](https://github.com/Shopify/shopify_theme) 

Essentially you want to run `theme watch` inside theme folder so any changes you made in `source/shopify-skeleton-theme` will be sync into your `theme` folder.

3. Run `grunt`

## Workflow

Everytime you come back to the project, run these:

1. `grunt watch`
2. `cd theme` then `theme watch` (remember to setup your config.yml first)
3. Start creating and building your themes for Shopify! 