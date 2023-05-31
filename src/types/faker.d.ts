declare module 'faker' {
    interface FakerStatic {
      datatype: any;
      // Define your custom typings for the faker API here
      name: {
        firstName(): string;
        lastName(): string;
        // ...
      };
      address: {
        city(): string;
        streetName(): string;
        // ...
      };
      // ...
    }
  
    const faker: FakerStatic;
    export = faker;
  }
  