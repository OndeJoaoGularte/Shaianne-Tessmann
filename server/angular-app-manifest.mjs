
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/Shaiane-Tessmann/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Program%20Files/Git/Shaiane-Tessmann/home",
    "route": "/Program%20Files/Git/Shaiane-Tessmann"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/Shaiane-Tessmann/home"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/Shaiane-Tessmann/prevention"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/Shaiane-Tessmann/training"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/Shaiane-Tessmann/healing"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/Shaiane-Tessmann/about"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/Shaiane-Tessmann/contact"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/Shaiane-Tessmann/solutions"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5667, hash: 'acf9ba6de5f47c6ad9d8461d6f97074d39b32e1830b42e5ee22f81d724a29295', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1143, hash: 'b388c1b400c1e0866ebe33e17ca3bbe9696d221e6e1d392d78abcd2e13aa1bb9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-WWHEHC6Y.css': {size: 305251, hash: '9+1M8iyEeqY', text: () => import('./assets-chunks/styles-WWHEHC6Y_css.mjs').then(m => m.default)}
  },
};
