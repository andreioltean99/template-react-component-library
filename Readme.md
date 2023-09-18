Resursa utila: https://www.youtube.com/watch?v=XHQi5a0TmMc&t=1103s

## Creare Librarie

1. Creare componenta pentru npm	\
`npm init`	\
`npm install react typescript @types/react --save-dev`\
`npm install react-dom`\
Initiere TS \
`npx tsc --init	`
`npm install rollup @rollup/plugin-node-resol` 	

2. Instalare rollup in loc de webpack\
`npm install --save-dev @rollup/plugin-commonjs @rollup/plugin-typescript rollup-plugin-dts` \	
`npm install rollup-plugin-postcss --save-dev` \
`npm i -D tslib	npm install postcss --save-dev` \
		
3. React StoryBook pentru mediu de test \
`npx sb init` \

4. Jest for Testing Code \	
`npm install @testing-library/react jest @types/jest --save-dev` \	
`npm install @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-jest` \
`npm install -D jest-environment-jsdom` \
`npm install identity-obj-proxy --save-dev` \
`npm install --save-dev @storybook/addon-jest`
`npm i concurrently --save-dev`
	

## Inainte de executia librariei
1. Pentru instalare dependinte:\
`npm install`

2. Pentru bundling:\
`npm run rollup`

3. Pentru testare:\
`npm run test`

4. Pentru mediul de testare:\
`npm run storybook`
