---
title: Prototyping APIs with Ember App Kit and Fortune.js
template: article.jade
tags: []
description: Fortune.js allows you to iterate on your user interface and the data API at the same time
---

- Why is this workflow important?
- What is Fortune, why use it?
- Introducing the Address Book app
- Setting up Fortune
  - How Fortune turns resources into API routes
  - Adding JSON-API Ember-Data Serializer & Adapter
  - Creating a Fortune server
- Creating the 'contact' resource & model
- Initial Address Book UI
- Creating the 'relationship' resource & model
- Displaying relationships for a contact
- Adding a user resource & model\*
- Custom Middleware: Authenticating user on login\*
- Authorizing user session\*
- Changing the data store
  - MongoDB
  - Postgres
- Wrapping Up: Why Fortune is better for prototyping than production


\* These features took me a lot of time to get working the first time I implemented them and I'm not terribly happy with the resulting code. I'm still debating on their inclusion in this article.
