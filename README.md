:warning: This client is still a work-in-progress.

# BadgeUp Node.js Client
Official Node.js client for working with [BadgeUp](https://www.badgeup.io/). Targets compatibility with all LTS versions of Node.js. These versions can be found in `.travis.yml`.

## Quickstart

```sh
npm install @badgeup/badgeup-node-client --save
```

## Initialization
The BadgeUp Node.js client is initialized with an options object.
```js
const BadgeUp = require('@badgeup/badgeup-node-client');
const badgeup = new BadgeUp({
    applicationId: '<your applicationId from the dashboard>',
    apiKey: // the API Key created for use with this application (preferred)
    // token: // the token issued when you use the dashboard (use apiKey if possible)
});

// get a complete list of achievements
badgeup.achievements.getAll().then(function(achievements) {
    console.log(achievements);
}).console.error(function(err) {
    console.log('Error fetching achievements: ' + err.message);
});;
```

## API

This client is promise-based. This client provides the following APIs:

### Applications

#### `get(applicationId)` - Retrieve an application by ID
Returns a promise that resolves with the application.

```js
badgeup.applications.get('ke9ox992');
```

#### `getAll()` - Iterate through all applications
Returns a generator that returns promises that resolves with each application.

```js
const applications = badgeup.applications.getAll();
for (let app of applications) {
    await app.then(function() {
        // do something with the application
    });
}
```

#### `create(application)` - Create a new application
Returns a promise that resolves with a new application.

```js
badgeup.applications.create({
    name: 'Honor Fuzz',
    description: 'A new-age fuzzy fighting game'
});
```

#### `remove(applicationId)` - Deletes an application by ID
Returns a promise that resolves with the deleted application.
```js
badgeup.applications.delete('ke9ox992');
```

#### `update(applicationId, changesObj)` - Updates an application by ID
Returns a promise that resolves when the application has been updated.
```js
badgeup.applications.modify('ke9ox992', { name: 'Honor Fuzz 2' });
```

### Events

### Metrics

### Achievements

### Criteria

### Earned Achievements

### Progress

### Api Keys

### Awards

### Billable Events
