
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Shaianne-Tessmann/',
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
    'index.csr.html': {size: 5648, hash: '76d677f03307c05369b334dccad09ea5f1211584726e7d84565731fed04a29e6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1124, hash: '4923158a68fb405db475c977fa11743c8e755ab18bfffd4156e8fda205bfd143', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 42846, hash: 'f42f69b13760c8789d795cb6c5f95d75b69f9237bcf427ddd2df5670d621ec30', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 36367, hash: '505121c31aeaf6ba4b9445d4d05629c17092727872c8cd64ab43d5e2a43fa78e', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'solutions/index.html': {size: 23123, hash: 'd3e88d543f0a432894f56406a46eecf6452b848becbad64463aa618791a749ad', text: () => import('./assets-chunks/solutions_index_html.mjs').then(m => m.default)},
    'prevention/index.html': {size: 44670, hash: '1837dc21398dc7ce5802e324f64ec7733c3273c4466b15d57302eac605e67fd2', text: () => import('./assets-chunks/prevention_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 33620, hash: 'fd35a0606cad63ce704f7b64fe408ef133d01d2df370997725d98a1b03ff61ba', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'training/index.html': {size: 45813, hash: 'f931ff19d1759bfa3f3480f9d7fa5cceb40f953938a92d4a8de88e7c44d0e81b', text: () => import('./assets-chunks/training_index_html.mjs').then(m => m.default)},
    'healing/index.html': {size: 42155, hash: '9240d1af905373472934015edde5515b963a9956b234cda0a0764d3073b02334', text: () => import('./assets-chunks/healing_index_html.mjs').then(m => m.default)},
    'styles-WWHEHC6Y.css': {size: 305251, hash: '9+1M8iyEeqY', text: () => import('./assets-chunks/styles-WWHEHC6Y_css.mjs').then(m => m.default)}
  },
};
