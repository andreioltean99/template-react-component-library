Resursa utila: https://www.youtube.com/watch?v=XHQi5a0TmMc&t=1103s

Creare componenta pentru npm	
npm init	
npm install react typescript @types/react --save-dev
npm install react-dom
npx tsc --init	Initiere TS
npm install rollup @rollup/plugin-node-resol	

Instalare rollup in loc de webpack
npm install --save-dev @rollup/plugin-commonjs @rollup/plugin-typescript rollup-plugin-dts	
npm install rollup-plugin-postcss --save-dev
npm i -D tslib	npm install postcss --save-dev
	
	
React StoryBook pentru mediu de test
npx sb init
	
	
Jest for Testing Code	
npm install @testing-library/react jest @types/jest --save-dev	
npm install @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-jest	
npm install -D jest-environment-jsdom	
npm install identity-obj-proxy --save-dev	
	

Trebuie rulate scripturile:
1. Pentru bundling:
npm run rollup

2. Pentru mediul de testare:
npm run storybook

2. Pentru testare:
npm run test