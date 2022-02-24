/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a4683bfac61f6f3455b8c3aa3bf4c0d5"
  },
  {
    "url": "assets/css/0.styles.fc783948.css",
    "revision": "56b97bb0697ea3c7acb0518572f4f102"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.17dc7fc0.js",
    "revision": "235105471074525d1d2bdc9d1186bdf9"
  },
  {
    "url": "assets/js/11.32ba2003.js",
    "revision": "b012f550c9920cce59792eeb20924fd7"
  },
  {
    "url": "assets/js/12.f4d805b2.js",
    "revision": "45a0f424731485e8513dbf3f52453817"
  },
  {
    "url": "assets/js/13.b369ab95.js",
    "revision": "ff30346a2ae0704d1a7791e2ab06f152"
  },
  {
    "url": "assets/js/14.4fd45c58.js",
    "revision": "2826a1bfcbbdf9810af87b4f633a8390"
  },
  {
    "url": "assets/js/15.978b8b3c.js",
    "revision": "7dbe0ca69cc591ebbefd7865ef130455"
  },
  {
    "url": "assets/js/16.a6459977.js",
    "revision": "75791849ed3fb2c8183c76b6e2ce6d4a"
  },
  {
    "url": "assets/js/17.f829100a.js",
    "revision": "8dceb00f63fb206ccfb8c7c505caca82"
  },
  {
    "url": "assets/js/18.6e17ea49.js",
    "revision": "4b38030804be7f5717134b1ab72e3d35"
  },
  {
    "url": "assets/js/19.686fa5bc.js",
    "revision": "a1d406c08ce6406bb14e2bc2a775469b"
  },
  {
    "url": "assets/js/2.96895072.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.a314b074.js",
    "revision": "a958358e0df5bfdc8de5072355b25782"
  },
  {
    "url": "assets/js/21.9f508f7d.js",
    "revision": "7302455a8289551003dfaa99087f4b66"
  },
  {
    "url": "assets/js/22.eaeb520d.js",
    "revision": "ca650d0d7870d8ba3226d492bc75ff8d"
  },
  {
    "url": "assets/js/23.418bb3fe.js",
    "revision": "89d101ad293c12b093f671eff310e158"
  },
  {
    "url": "assets/js/24.f72c0d60.js",
    "revision": "3b108dd8c6f0fa8930a326814df91f30"
  },
  {
    "url": "assets/js/26.2b7d224e.js",
    "revision": "d09140fd6d4af5d21412c1e04e0338bb"
  },
  {
    "url": "assets/js/3.33d6b42d.js",
    "revision": "808ea9f2d864b4467fe90f16175227a8"
  },
  {
    "url": "assets/js/4.5d00dd71.js",
    "revision": "354b2b53903cf28623245afa41ac130d"
  },
  {
    "url": "assets/js/5.4b8fb81c.js",
    "revision": "b865b25b78848b369ebb4f7a7684bf5b"
  },
  {
    "url": "assets/js/6.37f402c4.js",
    "revision": "43bdcf1e529c99fca1e216d96833b9ee"
  },
  {
    "url": "assets/js/7.a2994458.js",
    "revision": "817c1a9fc1e6f84583934d814a9ab3f5"
  },
  {
    "url": "assets/js/8.e8761b22.js",
    "revision": "df02b8b825d5757e125dbe170d1555c1"
  },
  {
    "url": "assets/js/9.c0a843c2.js",
    "revision": "6fdef7e064583d735d435c9c7be58314"
  },
  {
    "url": "assets/js/app.c1c8c5bd.js",
    "revision": "e260f6dc3b11f5bcef37201103a33cd6"
  },
  {
    "url": "conclusion/index.html",
    "revision": "7344d6e5631633fda27580de3595e938"
  },
  {
    "url": "design/index.html",
    "revision": "3f9ac44ca1399d6db50d2474183a8756"
  },
  {
    "url": "index.html",
    "revision": "24d30428bcc8d7fef11e1076b92fe996"
  },
  {
    "url": "intro/index.html",
    "revision": "960be41a33027d2723b127ac5bd26f53"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "7a37bd10b2e2b3d079939931950d9580"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "c18d1ffd2a1ff394aa31fb29ed346c45"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "8fd4265b75a05036a466d3ea10742fb2"
  },
  {
    "url": "software/index.html",
    "revision": "f22a437686e87300223664b62e29c719"
  },
  {
    "url": "test/index.html",
    "revision": "ccd158d25304b4374d88272dfb32c178"
  },
  {
    "url": "use cases/index.html",
    "revision": "4e4738b63ef9768d487e9128d4c33a0d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
