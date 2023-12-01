export const formFields = [
  {
    name: "name",
    placeHolder: "John",
    label: "Name",
    validation: {
      required: "Name is required",
      minLength: {
        value: 2,
        message: "Name must be at least 2 characters long",
      },
    },
    type: "letters",
  },
  {
    name: "lastName",
    placeHolder: "Doe",
    label: "Last Name",
    validation: {
      required: "Last Name is required",
      minLength: {
        value: 2,
        message: "Last Name must be at least 2 characters long",
      },
    },
    type: "letters",
  },
  {
    name: "cardNumber",
    placeHolder: "1234 5678 9012 3456",
    label: "Card Number",
    validation: {
      required: "Card Number is required",
      minLength: {
        value: 20,
        message: "must be exactly 16 characters long",
      },
      maxLength: {
        value: 20,
        message: "must be exactly 16 characters long",
      },
    },
    type: "numbers",
  },
  {
    name: "cvv",
    placeHolder: "cvv",
    label: "Security Code",
    validation: {
      required: "CVV is required",
      minLength: {
        value: 3,
        message: "CVV must be exactly 3 characters long",
      },
      maxLength: {
        value: 3,
        message: "CVV must be exactly 3 characters long",
      },
    },
    type: "password",
  },
  {
    name: "expiration",
    label: "Credit Card Expiration",
    validation: {
      month: { required: "Month is required" },
      year: { required: "Year is required" },
    },
    type: "select",
  },
];
