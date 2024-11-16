'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7389be7c6f02a262faf851e3fb3a69db",
"version.json": "7cf6dd973b52a4658016bd182cb397cd",
"index.html": "5fde053572b5b1aca20621d3edf9f5dc",
"/": "5fde053572b5b1aca20621d3edf9f5dc",
"main.dart.js": "5ff6f7c98a1f18d24062988f7165d6de",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "99a065f7f9f25ffff4a63a565663e757",
".git/config": "6729cba4dee4cfa29da61071737ca9ce",
".git/objects/61/66a726cd3ac1e49052e1db1fec489ced0ed61d": "339f5034d63aa20dc77c921876b6a1eb",
".git/objects/92/a355e75f58919594055b2323df7ba067f07d6b": "761612cc0178a909f7e292c1e9ce3119",
".git/objects/68/d751f93db35941c44332501b9d5e46d41fd548": "adbc32c87afadcbfae78b9991184f130",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3c/e4601064880a3228b15840865ac793b878ec11": "71fc966bbb8a49260863df953eb42e9a",
".git/objects/5a/6393e44223b19247381793dbad492a99dbbd24": "e25a438186616037cebd7d8e505cfe13",
".git/objects/bb/1aebce019615fa9e47e7861f2540c98888ef4b": "8c722bb6f8bca17d91451cd7997a98da",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/be/5019500bfd3e73efae647f7e9b8f064f562d72": "e64387934be2cddef141c032c3eff4f3",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/13e574be1152639d91bb15b1956a8cdaa53673": "fbf117ef3298b3a7bc3c61bf43d7c7fa",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/c43f016a0150e1642cdf7aebf36f5f9f671d5e": "268ad61e004ef0b4bb517541b7fa7f80",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fe/8158751db04f0b33832973ebb82a6cd037c29d": "931abb3c9e26f1139e4ffa6d02bbb69c",
".git/objects/c8/8c7d76e40f23c3a685ea8ac3321d0feab0a9f9": "7b6a132556b127395ff89abde3dd70e8",
".git/objects/ed/f02d0892c1ca0e5d08f9b442334b7e70847a91": "ba143f55b79458f2f8b6b1225b1e85f3",
".git/objects/c6/c9fd6c0ed63bb2d1b3b0b1dc0287f788225786": "c23f9a82edfe34033707cab06f9db3f4",
".git/objects/27/349ca29b9b1ca089638fa6866b2c7333855c07": "02362e1fa54d29622b645fc90155e980",
".git/objects/7d/1b2cba378bc46b59c1909ac47fcb7845fdfabe": "789614e4539eceee9cb3ef3cac59a7c0",
".git/objects/7c/e582ff064b9441ff2c8be95d3e3a4bbe47e94a": "4aa9ad17f86e3f845de85fa6ea997c85",
".git/objects/7c/e2dd0f2aeb5c3724e612b43c32db5d346a1520": "79a65cb195cf9a2a57cfed8e9c8db7f8",
".git/objects/45/a728863811365f454682e6ae7184be4ac7d8d4": "a5aa3e16c3072a60f9fccb339144f076",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/74/ce858e66136e5b47cc7659b1bbfe4040c1f402": "f15637cdf70d333f3d118ee155d0704e",
".git/objects/28/d2ae32db59de3a623e02e66c7c90363cdc5236": "57ec8cbed8fa187589af72e73b8d5527",
".git/objects/28/47e25f5912c8fc7f35b23b38979a670c4eaf2b": "f47e7341fc158a91577992445ed9baf5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/0ae3c33492579730cd71b569f2dae13ee02508": "b13255a448c8ad7e5216636013cf371e",
".git/objects/81/f7a6cba7063c5b567e5e045898a60cf2fe0617": "eebc5e10ae93f13bd18c2ec6664489b5",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/598ab2a8ac5a20c09b08490f6e84de7e7fd7e9": "fde5063e688e427c29b0165d9ed356e7",
".git/objects/36/869c59d5dbcbf65b33340d71460e65140e7bf9": "d992134008882b39382d7003c83f7157",
".git/objects/31/2d0e4e1143b96cb52c532b4bf1259fb2098590": "0b70f1a6e663bd93a7a3e97d4712d5fc",
".git/objects/65/a28eb3658136892a794d1e731cee90f88b9307": "3fe3074f89993a61d215744f63bbff76",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/37/cbbe2feb4583d1789d00500ce77dfe633ccbe9": "e80ca406669366a35efaeed08ec66524",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/6d/9a5fb8795c8470f903bd2d1a53c7a899ce5deb": "f59ed367b21011c6460d348bfe289c66",
".git/objects/55/f6924248d3e4780584509ad02cd8521eecf850": "4eee99f7ce03533b5238a59120c27da6",
".git/objects/63/685347ab954a646a704def89144fda5c4869ff": "5b5cda9474c25ceb109e84ecb55d7bad",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b8/5cdd440c5a6f4083c15c388814ec70cf3f3746": "e9babae9aebb782f5ac83d31fc67c02e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/dd/9346694421322676209904bc0bd32c6035ad16": "efa06ffdb8dc8f5be532e8cd0b40c62c",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d2/a5e5627df59c13355037259d28d139264d3e60": "14326db88bb2f3bbbcd1f7f54ce4f193",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cd/ea7638ccd8d19fb28669f4be58bd0afbaa8cb7": "71d45a8e5bdb148621dd084738e30c78",
".git/objects/fa/923ee0f84d8f3a4236ebd095bf80910e486294": "b2ede85addf63bf7314462df07417765",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/a0054ff0a5c33e1d0e1ae82ffddde66f8bb5ae": "a424a57c0b94dfce548b9031356c9859",
".git/objects/48/069fc4c82ac734928066969cb507c70ea7fa05": "69d26686370cba50f0283fcda30a4d11",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4f/b234a0bb1aae0e81f00603552aa5f0c33b9bdb": "955b035f4408227fa0b62807be1d738d",
".git/objects/4f/31b716c60dd585232234209f5d96a822db7944": "afa8c23457c946ae61777d1fbf3ee4cd",
".git/objects/8d/93bca9aaf4e9bf1ae11f8304641d77bca5335c": "9083bfc705c50f8864cd1680452f52e1",
".git/objects/8d/780d320a6b8f0a8b535106cd3c4a91b9846083": "28f31eab57d149847b40fbd954928a6b",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/76/2db76d93b346149566cb75a2d4d5d473bdf5c1": "edaf710a12e8823fb6820251bd6ad741",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/5dd50888c5926bca00902453e4111f8428e024": "3d1be386d441ce876bc848e925598c84",
".git/objects/47/1c4119e47b7f233db616bd601997721298e9c0": "6a7dc29ac0e285f3aa37f85456caa529",
".git/objects/8b/e4eaa66e0b7c02a1df7682695a2730bd2d1246": "8e123753c866c53c5536fe298254b777",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "84a7b423dccf342186118f49f9a22e13",
".git/logs/refs/heads/main": "84a7b423dccf342186118f49f9a22e13",
".git/logs/refs/remotes/origin/main": "2721ccce9bc93cfbc081268af9e693b4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "2c9e2e05e8a4b74c2c42d89cb93176e8",
".git/refs/remotes/origin/main": "2c9e2e05e8a4b74c2c42d89cb93176e8",
".git/index": "30e4bdd6b75f31d310a2482d0a802272",
".git/COMMIT_EDITMSG": "fdeadf0521ba4442f784a4eb185e54d1",
".git/FETCH_HEAD": "99fbc67c7af6387540342a146ce63f2d",
"assets/AssetManifest.json": "6ce0a25331ff9f8ed594dae009ae54d2",
"assets/NOTICES": "03c113d3341b7320af8f80d0f603a380",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "143e5562c2ef1b300b05c04e26bd1ba9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "89b15323914627f3adf75c2545cf7735",
"assets/fonts/MaterialIcons-Regular.otf": "5e78c4c424bc9e9da7c92c6d6c844d77",
"assets/assets/013.BMP": "bbfc1a815e1b8c188f3aff7c4ac0015d",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
