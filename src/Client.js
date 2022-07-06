import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "rziiaycy", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  apiVersion: '2021-08-31', // use a UTC date string
  token: 'sknKXGPKFEm78cFZ98tWJIetKvPFEfbxg5ItGf2cHDX9wbxKfonqlFzaA5pCKHtjMSI5f5KLuqLqgrbEID8lqUU9SWNtGQlIbuOlZg9ovDxnDf6aAtCvC9tEZgwzLp0BfJpbjOj4GAJL8KBwO7h5SyQ1WulHyGri5L0xuQ6N5nY7rHVXlNsY', // or leave blank for unauthenticated usage
  ignoreBrowserTokenWarning: true
});