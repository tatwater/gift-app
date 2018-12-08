import FormsUpload from 'meteor/vulcan:forms-upload';

const schema = {
  _id: {
    type: String,
    optional: true,
    canRead: ['guests'],
  },
  createdAt: {
    type: Date,
    optional: true,
    canRead: ['guests'],
    onCreate: () => {
      return new Date();
    },
  },
  userId: {
    type: String,
    optional: true,
    canRead: ['guests'],
    resolveAs: {
      fieldName: 'user',
      type: 'User',
      resolver: (gifts, args, context) => {
        return context.Users.findOne(
          { _id: gifts.userId },
          {
            fields: context.Users.getViewableFields(
              context.currentUser,
              context.Users
            )
          }
        )
      },
      addOriginalField: true,
    }
  },

  for: {
    type: String,
    optional: true,
    canRead: ['guests'],
  },
  title: {
    label: 'What\'s it called?',
    type: String,
    optional: true,
    canRead: ['guests'],
    canCreate: ['members'],
    canUpdate: ['members'],
  },
  location: {
    label: 'Who makes this?',
    type: String,
    optional: true,
    canRead: ['guests'],
    canCreate: ['members'],
    canUpdate: ['members'],
  },
  url: {
    label: 'Where can you buy it?',
    type: String,
    optional: true,
    canRead: ['guests'],
    canCreate: ['members'],
    canUpdate: ['members'],
  },
  imageUrl: {
    label: 'Drop a cool photo here',
    type: String,
    canRead: ['guests'],
    canCreate: ['members'],
    canUpdate: ['members'],
    input: FormsUpload,
  },
};

export default schema;
