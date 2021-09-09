## MIVIE Server

Node server for hosting endpoints for MIVIE.

## Architecture

-Uses Express for hosting endpoints.
-Authorizes endpoints with Firebase Authentication.
-Database interaction is with Firebase Firestore.
-Endpoints are exported with cranny syntax (developed by Will Tesler). See `index.js`.

## Setup Gcloud

gcloud auth login
gcloud config set project mivi-321718


## Deploy

gcloud app deploy

## Local Development

Use `npm run startDev` .

When website is run locally, it will look for this local server.

All functions have associated admin files for running the functionality directly.

## cURLing

POST `curl -d '{"sid": "LTAK7E"}' -H 'Content-Type: application/json' http://localhost:8080/funcName`
GET `curl http://localhost:8080/funcName`

### Google Cloud Storage CORS Support

#### One Time Setup (Per Google Cloud Storage Bucket)
Paste the following into a json file called `cors.json`:
```
[
    {
      "origin": ["*"],
      "responseHeader": ["Content-Type", "Access-Control-Allow-Origin", "x-goog-resumable"],
      "method": ["PUT", "GET", "POST"],
      "maxAgeSeconds": 3600
    }
]
```

Run `gsutil cors set cors.json gs://BUCKET`

Where `BUCKET` is the bucket which needs CORS support.
