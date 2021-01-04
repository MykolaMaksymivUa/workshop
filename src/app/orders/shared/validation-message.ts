export const validationMessageMap = {
  firstName: {
    required: 'Please enter your first name',
    minlength: 'Please enter more than 3 character'
  },
  email: {
    required: 'Please enter your email address.',
    pattern: 'Please enter a valid email address.',
    asyncEmailInvalid: 'Please enter a valid Gmail'
  }
};
