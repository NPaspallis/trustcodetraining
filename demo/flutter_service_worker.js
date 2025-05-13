'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "219b881418d925da460ffb18a7cf19ea",
"version.json": "58fb9162dde111eda9da676fd55f9b4b",
"index.html": "0e65c775ea7722ee0b25fc87344abb5b",
"/": "0e65c775ea7722ee0b25fc87344abb5b",
"main.dart.js": "bb77d11745adfa2b45032db967b781fc",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "eedf41258dde052c982843a604ec5878",
"icons/Icon-192.png": "70208e339ab34e3ec4df03b2de9f7fd6",
"icons/Icon-maskable-192.png": "70208e339ab34e3ec4df03b2de9f7fd6",
"icons/Icon-maskable-512.png": "88cae13b64636ab626604a8102075c7a",
"icons/Icon-512.png": "88cae13b64636ab626604a8102075c7a",
"manifest.json": "edf06e950b11fb752f2fc90d30e663d8",
"assets/AssetManifest.json": "3e06336ec7fad47348a4fde03f1ae6ef",
"assets/NOTICES": "26fde98910e316fd3d79c0c84b3c16de",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "dd7295704f304e8ba503c9b983d99e94",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "da7a1223f93d26e42ffec8723c25d654",
"assets/fonts/MaterialIcons-Regular.otf": "22d1b9abfe12eea0eaf9f0135a2c2484",
"assets/assets/images/fruit-basket-caH-ZLrisZA-unsplash.jpg": "9f1302d3015e312ba51ce35124934cdf",
"assets/assets/schema/bucket.json": "b4ae0b41317751d35015897b620f5790",
"assets/assets/schema/story_schema.json": "9d0074151bf670f43d4bc91878d433dd",
"assets/assets/schema/multipoll_component.json": "8790d05920636c64f948e6e287cd9404",
"assets/assets/schema/poll_option.json": "e92e88897159dddbf81df209a11b0914",
"assets/assets/schema/discussion_message.json": "10ac868cca2a3b1b4f8d4dc8446d431e",
"assets/assets/schema/audio_component.json": "1ca20d0f24efee3e76d69aee80d1e81d",
"assets/assets/schema/branch_component.json": "b7f76001d38d80546a0d35bb555c325f",
"assets/assets/schema/bucket_component.json": "fa82025c2f1ee9696dd0c4651717afda",
"assets/assets/schema/mcq_option.json": "44258eb84024920b86feaef29ff17693",
"assets/assets/schema/multimcq_component.json": "f483c86041de1109bb0c04b1d6bf39cb",
"assets/assets/schema/exam_component.json": "2c88a13b07f58164c9ad05a25f082fc4",
"assets/assets/schema/bucket_item.json": "d85a2a652553ce5a808ccbe4d9338208",
"assets/assets/schema/metadata_schema.json": "d5e5b2a190eea96b08bd6e37e8066542",
"assets/assets/schema/badge_component.json": "50c9da2646e24cd20a912ad325a3bb58",
"assets/assets/schema/exam_question.json": "d0c1b88fe645f662ede1ece0144eb8ac",
"assets/assets/schema/exam_answer.json": "166210b28c2750dcb36bbb3ec56fa03f",
"assets/assets/schema/chat_component.json": "bd2a55b9309b1d4646b80c04a7da4a44",
"assets/assets/schema/discussion_component.json": "39b8d4ac8cb68be34057424eeb0650a5",
"assets/assets/schema/chat_message.json": "e17f6a9e7a467048fc1b8dc5e51ac540",
"assets/assets/schema/mcq_component.json": "9276dd5322738e36b79c7edeedd78ba7",
"assets/assets/schema/video_component.json": "dded0d0118de9bb22e05b1f1adc1da8e",
"assets/assets/schema/html_component.json": "00b8a3fcf7d933f5208037e2b84e6137",
"assets/assets/schema/component_choice.json": "c94ca9862363de0cd169ab92882672bb",
"assets/assets/schema/poll_component.json": "7a2820852dcafd5c98cc8383e5905fb9",
"assets/assets/schema/participant.json": "cba09affd47e724906406af74718db88",
"assets/assets/story/trust_code.json": "769ef36bbecc26f8220b6957a840c678",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
