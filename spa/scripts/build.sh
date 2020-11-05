#!/bin/bash
export PUBLIC_URL="/magnoliaAuthor/.resources/spa-lm/webresources/build"

npm run build
rsync -a --delete ../build/ ../../light-modules/spa-lm/webresources/build/