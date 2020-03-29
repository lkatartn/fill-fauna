# Upload data from your json file to FaunaDB

This is a simple next.js application, that allows you to upload data from .json file to FaunaDB collection.

## How to use this tool

There are some prerequisites:

- Database and collection should be created in FaunaDB. [How to create db and collection](https://docs.fauna.com/fauna/current/start/cloud#create-db)
- If you use JSON file. It should contain an array of objects. These objects will be added as documents in collection.
- If you use CSV file. First row should contain column names

How to use:

1. Create key, with access to proper database. [How to create access key](https://docs.fauna.com/fauna/current/start/vs_code#key)
2. Open https://fill-fauna.now.sh
3. Select or drag'n'drop .json or .csv file with data from your computer
4. Enter access key. It is used in requests only from your browser page
5. Enter collection id
6. Press `Fill your collection` button

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
