#!/bin/bash

# Setup database.
mongosh < setup/mongo_init_db.js
# Download seed data.
curl 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4fc14642-a3d6-424b-b621-5ecf5d955d7f/foam-seed.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220403T225616Z&X-Amz-Expires=86400&X-Amz-Signature=dbf0d5205b8e3b1889a639b5de9ec49013ecf79d25d68c4e0bfd0f5bb6573300&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22foam-seed.json%22&x-id=GetObject' --output foam-seed.json
# Import foam-seed.json into mongo.
mongoimport --db foam \
  --collection runs \
  --type json \
  --file foam-seed.json \
  --jsonArray
# Initialize data.
mongosh < setup/mongo_init_data.js
# Cleanup.
rm foam-seed.json
