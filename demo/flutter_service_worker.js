'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "fc18d83ea8b098d776684fa5b223ce1d",
"assets/AssetManifest.bin.json": "cdfa04844f693794a7bfead0f74f2a54",
"assets/AssetManifest.json": "7abac84373a7ea6f1cf818eec9f24682",
"assets/assets/images/africa.jpeg": "64cd63a85cfa07720320796970750f62",
"assets/assets/images/background.jpg": "70bf136684364437fa0d0995b848bbf0",
"assets/assets/images/oil-painting-7761245_1920.jpg": "dc4a33624f25ff29d628c7ca59a8ddb2",
"assets/assets/images/pexels-pixabay-235985.jpg": "73b1d9e844748ae4e5fc5ce65a64b611",
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
"assets/assets/story/trust_code.json": "12276f7db9820ed5c2482b5f21447f81",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "22d1b9abfe12eea0eaf9f0135a2c2484",
"assets/NOTICES": "1a1145c1bb32aae898d9ab14e3378ff8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "eedf41258dde052c982843a604ec5878",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "8d0f69f3885d50cfdd38b916686e7eb4",
"icons/Icon-192.png": "70208e339ab34e3ec4df03b2de9f7fd6",
"icons/Icon-512.png": "88cae13b64636ab626604a8102075c7a",
"icons/Icon-maskable-192.png": "70208e339ab34e3ec4df03b2de9f7fd6",
"icons/Icon-maskable-512.png": "88cae13b64636ab626604a8102075c7a",
"index.html": "1e4494e3c278cf1db6107d7978261c9f",
"/": "1e4494e3c278cf1db6107d7978261c9f",
"main.dart.js": "79aed02e1e127211913a5e36e6ce8676",
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
