#!/bin/bash
export PUBLIC_URL="/magnoliaAuthor/.resources/spa-lm/webresources/build"

npm run build
cp -r ../build ../../light-modules/spa-lm/webresources/