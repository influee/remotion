---
id: deletesite
title: deleteSite()
slug: /lambda/deletesite
---

Removes a Remotion project from your S3 bucket.

Each project is located in the `sites/` subdirectory of your S3 bucket. Calling this function is equivalent of deleting all files inside a subfolder of your `sites/` subdirectory.

## Example

Gets all sites and deletes them.

```ts twoslash
// @module: ESNext
// @target: ESNext
import {AwsRegion, deleteSite, getSites} from '@remotion/lambda';

const region: AwsRegion = 'eu-central-1';

const {sites} = await getSites({
  region
});

for (const site of sites) {
  await deleteSite({
    bucketName: site.bucketName,
    siteName: site.id,
    region
  })
  console.log(`Site ${site.id} deleted.`)
}
```

## Arguments

An object with the following properties:

### `region`

_string_

The [AWS region](/docs/lambda/region-selection) where the project resides in.

### `bucketName`

_string_

The name of the S3 bucket in which your site resides in.

### `siteName`

_string_

The unique ID of the project you want to delete.

## Return value

A promise resolving to an object with the following property:

### `totalSizeInBytes`

_number_

The amount of space that was freed by deleting the project.

## See also

- [getSites()](/docs/lambda/getsites)
- [deploySite()](/docs/lambda/deploysite)
