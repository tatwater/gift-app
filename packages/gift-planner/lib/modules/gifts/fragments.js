import { registerFragment } from 'meteor/vulcan:core';


registerFragment(`
  fragment GiftsItemFragment on Gift {
    _id
    createdAt
    userId
    for
    title
    location
    url
  }
`);
