import { registerFragment } from 'meteor/vulcan:core';


registerFragment(`
  fragment MemberPage on User {
    _id
    slug
    displayName
    avatarUrl
  }
`);
