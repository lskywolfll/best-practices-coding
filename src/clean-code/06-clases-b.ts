(() => {
  // No Aplicando el principio de responsabilidad unica

  type Gender = "M" | "F";

  interface PersonProps {
    birthdate: Date;
    gender: Gender;
    name: string;
  }

  class Person {
    public birthdate: Date;
    public name: string;
    public gender: Gender;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    name: string;
    rol: string;
  }

  class User extends Person {
    public lastAccess: Date;
    public email: string;
    public rol: string;

    constructor({ email, rol, birthdate, gender, name }: UserProps) {
      super({ name, gender, birthdate });
      this.lastAccess = new Date();
      this.email = email;
      this.rol = rol;
    }

    creackCredentials() {
      return true;
    }
  }

  interface UserSettingsProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastOpenFolder: string;
    name: string;
    rol: string;
    workingDirectory: string;
  }
  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      birthdate,
      email,
      gender,
      lastOpenFolder,
      name,
      rol,
      workingDirectory,
    }: UserSettingsProps) {
      super({ email, rol, name, gender, birthdate });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  const userSettings = new UserSettings({
    birthdate: new Date("1985-10-21"),
    email: "fernando@gmail.com",
    gender: "M",
    lastOpenFolder: "/home",
    name: "Fernando",
    rol: "admin",
    workingDirectory: "/usr/home",
  });

  console.log({ userSettings });
})();
