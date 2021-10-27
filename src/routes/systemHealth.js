const {
  client,
  health,  
} = require('../config')

module.exports = function (router){

  //* Check the Appwrite HTTP server is up and responsive.
  // This route is used to overview check the health of the system
  router.get('/health', (req, res, next) => {
    // This line contains the system modules that are being checked
    // It will be changed on every route
    let promise = health.get();

    promise.then(function (response) {
      res.json(response);
    }, function (error) {
      res.json(error)
    });
  });

  //* Check the Appwrite database server is up and connection is successful.
  router.get('/health/db', (req, res, next) => {
    let promise = health.getDB();

    promise.then(function (response) {
      res.json(response);
    }, function (error) {
      res.json(error)
    });
  });

  //* Check the Appwrite in-memory cache server is up and connection is successful.
  router.get('/health/cache', (req, res, next) => {
    let promise = health.getCache();

    promise.then(function (response) {
      res.json(response);
    }, function (error) {
      res.json(error)
    });
  });

  /*
    Check the Appwrite server time is synced with Google remote NTP server.
    We use this technology to smoothly handle leap seconds with no disruptive events.
    The Network Time Protocol (NTP) is used by hundreds of millions of computers and devices to synchronize their clocks over the Internet.
    If your computer sets its own clock, it likely uses NTP.
  */
  router.get('/health/time', (req, res, next) => {
    let promise = health.getTime();

    promise.then(function (response) {
      res.json(response);
    }, function (error) {
      res.json(error)
    });
  });

  //* Get the number of webhooks that are waiting to be processed in the Appwrite internal queue server
  router.get('/health/webhooks', (req, res, next) => {
    let promise = health.getQueueWebhooks();

    promise.then(function (response) {
      res.json(response);
    }, function (error) {
      res.json(error)
    });
  });

  //* Get the number of tasks that are waiting to be processed in the Appwrite internal queue server.
  router.get('/health/queue/tasks', (req, res, next) => {
    let promise = health.getQueueWebhooks();

    promise.then(function (response) {
      res.json(response);
    }, function (error) {
      res.json(error)
    });
  });

  //* Get the number of logs that are waiting to be processed in the Appwrite internal queue server.
  router.get('/health/queue/logs', (req, res, next) => {
    let promise = health.getQueueLogs();

    promise.then(function (response) {
      res.json(response);
    }, function (error) {
      res.json(error)
    });
  });

  //* Get the number of usage stats that are waiting to be processed in the Appwrite internal queue server.
  router.get('/health/queue/usage', (req, res, next) => {
    let promise = health.getQueueUsage();

    promise.then(function (response) {
      res.json(response);
    }, function (error) {
      res.json(error)
    });
  });

  //* Get the number of certificates that are waiting to be issued against Letsencrypt in the Appwrite internal queue server.
  router.get('/health/queue/certificates', (req, res, next) => {
    let promise = health.getQueueCertificates();

    promise.then(function (response) {
      res.json(response);
    }, function (error) {
      res.json(error)
    });
  });

  //* To access this route, init your SDK with your project unique ID and API Key secret token. Make sure your API Key is granted with access to the "health.read" permission scope.
  router.get('/health/queue/functions', (req, res, next) => {
    let promise = health.getQueueFunctions();

    promise.then(function (response) {
      res.json(response);
    }, function (error) {
      res.json(error)
    });
  });

  //* Check the Appwrite local storage device is up and connection is successful.
  router.get('/health/storage/local', (req, res, next) => {
    let promise = health.getStorageLocal();

    promise.then(function (response) {
      res.json(response);
    }, function (error) {
      res.json(error)
    });
  });

  //* Check the Appwrite Anti Virus server is up and connection is successful.
  router.get('/health/anti-virus', (req, res, next) => {
    let promise = health.getStorageLocal();

    promise.then(function (response) {
      res.json(response);
    }, function (error) {
      res.json(error)
    });
  });
}
