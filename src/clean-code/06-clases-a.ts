(() => {
  // No Aplicando el principio de responsabilidad unica

  type Gender = "M" | "F";

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  class User extends Person {
    public lastAccess: Date;

    constructor(
      public email: string,
      public rol: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    creackCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      rol: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, rol, name, gender, birthdate);
    }
  }

  const userSettings = new UserSettings(
    "/usr/home",
    "/home",
    "fernando@gmail.com",
    "admin",
    "Fernando",
    "M",
    new Date("1985-10-21")
  );

  console.log({ userSettings })
})();
