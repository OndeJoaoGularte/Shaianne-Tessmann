
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://OndeJoaoGularte.github.io/Shaianne-Tessmann/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Shaianne-Tessmann/home",
    "route": "/Shaianne-Tessmann"
  },
  {
    "renderMode": 2,
    "route": "/Shaianne-Tessmann/home"
  },
  {
    "renderMode": 2,
    "route": "/Shaianne-Tessmann/prevention"
  },
  {
    "renderMode": 2,
    "route": "/Shaianne-Tessmann/training"
  },
  {
    "renderMode": 2,
    "route": "/Shaianne-Tessmann/healing"
  },
  {
    "renderMode": 2,
    "route": "/Shaianne-Tessmann/about"
  },
  {
    "renderMode": 2,
    "route": "/Shaianne-Tessmann/contact"
  },
  {
    "renderMode": 2,
    "route": "/Shaianne-Tessmann/solutions"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5681, hash: 'db8766aed608d47cfdc1d1c48a867d30a7feaa533e3b3707075206488aba7e28', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1157, hash: '6d1b160b145e393b9f8a9413df722469ea1a77c9a2f785b4c02885ea26c13e83', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 36796, hash: '90881e63e7fabc68053af2967ee89355ff31e6aab45440571f9d391d1efa34bc', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 43506, hash: 'ebed20f6fc772e7cafe8e5b40db8f4a9dbcee6258b15331ee938af8abaddfdff', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'solutions/index.html': {size: 23552, hash: '7e17250945b42c3031e2d480ba33dbda2df3603e5ea398a3f0121d972c6f6b33', text: () => import('./assets-chunks/solutions_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 34082, hash: '5b8c146b91705e1135470ce4eff80d73830cdcc8bc1494c8c34b4513e9dcdf50', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'prevention/index.html': {size: 45165, hash: 'bd92622cc0d5fe9befcf77735db2fd48ffd7ee4a37fbd0744aac71efb5d64092', text: () => import('./assets-chunks/prevention_index_html.mjs').then(m => m.default)},
    'healing/index.html': {size: 42650, hash: '07d7d93d848518ea7bc002825c4c9fc117e267c762af2f1938a6978babec95c6', text: () => import('./assets-chunks/healing_index_html.mjs').then(m => m.default)},
    'training/index.html': {size: 46308, hash: '2f202d3c804d90eac957c873eccfcd1bbd82f763157faca782cc59f3c1e9819f', text: () => import('./assets-chunks/training_index_html.mjs').then(m => m.default)},
    'styles-WWHEHC6Y.css': {size: 305251, hash: '9+1M8iyEeqY', text: () => import('./assets-chunks/styles-WWHEHC6Y_css.mjs').then(m => m.default)}
  },
};
