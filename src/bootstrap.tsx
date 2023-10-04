import React from 'react';
import ReactDOM from 'react-dom/client';
import { createMemoryHistory, createBrowserHistory, InitialEntry, MemoryHistory } from 'history';
import App from './App';

interface RouterConfig {
    onNavigate?: () => {},
     defaultHistory: MemoryHistory | any,
    initialPath: InitialEntry
}

// Mount function to start up the app
const mount = (el: Element, { onNavigate, defaultHistory, initialPath }: RouterConfig ) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });

    if (onNavigate) {
        history.listen(onNavigate);
    }

    const root = ReactDOM.createRoot(el);
    root.render(<App history={history} /> );

    return {
        onParentNavigate(nextPathname: string) {
            // Container just navigated
            const { pathname } = history.location;

            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    }
}

// If we are in development and in isolation
// call mount immediately
 if (process.env.NODE_ENV === 'development') {
     const devRoot = document.getElementById('#_marketing-dev-root')!;
     if (devRoot) {
        mount(devRoot, {
            defaultHistory: createBrowserHistory(),
            initialPath: ''
        });
     }
 }

// We are running through container
// and we should export the mount function
export { default as Marketing } from './App';