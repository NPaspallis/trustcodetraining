'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "81a3bea5dfa0ae552abd2ed854808d1c",
"assets/AssetManifest.bin.json": "ed81ba399eadf88d7755d8f2a9907a59",
"assets/AssetManifest.json": "3db3b41d1d227fd8bc2ee0f680c2aafa",
"assets/assets/images/clock.png": "27e90107336d8dc63c2c1b75da94a71f",
"assets/assets/images/fruit-basket-caH-ZLrisZA-unsplash.jpg": "9f1302d3015e312ba51ce35124934cdf",
"assets/assets/schema/audio_component.json": "a1ce08e050d363bb7b650c38d437c96c",
"assets/assets/schema/badge_component.json": "10b0aebe018f4e609efe3ce08029bd4e",
"assets/assets/schema/branch_component.json": "59fd0d3a99b1b0077254a2c51a8281ed",
"assets/assets/schema/bucket.json": "f83741875a21f6c8ca2bc5683a304345",
"assets/assets/schema/bucket_component.json": "20a7e7edf98e121a705ba1b09beb4504",
"assets/assets/schema/bucket_item.json": "fe9cd88f2c5a7b335ff7c16ba08fd78d",
"assets/assets/schema/chat_component.json": "4e43a27ce5efbe4b3de8612f9cadc238",
"assets/assets/schema/chat_message.json": "69f9779785e443ef8c4f1e33e018af57",
"assets/assets/schema/component_choice.json": "8bd1fdba7a3308c17772a842a487f152",
"assets/assets/schema/discussion_component.json": "6a994e34a208aaa55935f07107bbf05d",
"assets/assets/schema/discussion_message.json": "c44b3de08cdc72135a9b4b140e6e34c1",
"assets/assets/schema/exam_answer.json": "db4de01d930bd4f54dcdadd91f35f636",
"assets/assets/schema/exam_component.json": "2f8e62952d1fe40262ffa06d7b7d0e46",
"assets/assets/schema/exam_question.json": "9c3ec52f2a1ce8f3ea7db6425d806342",
"assets/assets/schema/html_component.json": "aeb5d2343b03e37585b1d40bb5f204cd",
"assets/assets/schema/mcq_component.json": "f338aa6b9855b9d7503115521551e360",
"assets/assets/schema/mcq_option.json": "13915404a0b86f36bd884e20f66a95c6",
"assets/assets/schema/metadata_schema.json": "1dc8ceee291f0c06df6e492777f17917",
"assets/assets/schema/multimcq_component.json": "1ac5f0f8634267cf5c043844061b3ef3",
"assets/assets/schema/multipoll_component.json": "6f7106af4314714d8a19579be54aad76",
"assets/assets/schema/participant.json": "a4b7c05cb45fe3b76f52ccb8c3870a23",
"assets/assets/schema/poll_component.json": "48d728a9be49867c521776c79074ba5d",
"assets/assets/schema/poll_option.json": "78ddb6c767dd0c024658f14e54e784b5",
"assets/assets/schema/story_schema.json": "94c7cda6a51b89b5e1dc769f70e71054",
"assets/assets/schema/video_component.json": "93187be09900096bc1708d3ca5bd5cdf",
"assets/assets/story/trust_code.json": "774a0841bc065290f228ee1f4b482727",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "3c562f0320adb47bed277aaaccdfd803",
"assets/NOTICES": "98e655ece3d042e817754e0c3bda0b92",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "eedf41258dde052c982843a604ec5878",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "0a600eeaddf2a873269875baa054ef7c",
"icons/Icon-192.png": "70208e339ab34e3ec4df03b2de9f7fd6",
"icons/Icon-512.png": "88cae13b64636ab626604a8102075c7a",
"icons/Icon-maskable-192.png": "70208e339ab34e3ec4df03b2de9f7fd6",
"icons/Icon-maskable-512.png": "88cae13b64636ab626604a8102075c7a",
"index.html": "d5e7e92d81527f510780db90eedffa69",
"/": "d5e7e92d81527f510780db90eedffa69",
"main.dart.js": "1686682215fcb16ff7ef0e1548b7c82f",
"manifest.json": "fa4e16091a42bc9720c75ff986c722d0",
"version.json": "58fb9162dde111eda9da676fd55f9b4b"};
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
