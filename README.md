It's a work in-progress so don't use this on your live site or clients work. 

## Will update soon

References

> http://gpiot.com/blog/twitter-bower-grunt-get-started-with-assets-management/

+ Remember to clear cache `bower cache-clean` to reinstall `bootstrap` with bower.

## Figure this out later

> Current option on dynamically load js files into `theme/assets` to match Shopify template structure;

+ `ln -s` symlink; not ideal. 
+ `modified `Gruntfile.js` inside bootstrap to `src : dest` into `theme/assets`.

> Figured better to copy Bootstrap files into `theme/assets` instead of the other way around.

## TODO (More like to learn lol)

+ How to load `node_modules` and install `grunt-contrib-copy` LOLOLOLOLOL 

## Step-by-step tutorial how to make use of this repo

1. Run `bower install bootstrap`
2. Run `grunt`