#!/bin/bash

pnpm build
cp package.json README.md dist/ 
cd dist/
npm publish