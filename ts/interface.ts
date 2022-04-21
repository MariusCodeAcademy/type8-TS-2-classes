// type UserType = {
//   name: string;
//   id: number;
// };

interface User {
  name: string;
  id: number;
  role: 'admin' | 'editor';
}

interface AdminUser extends User {
  role: 'admin'; // perrasom role taisykle
  logName(prefix: string): void;
  birthDate?: Date; // galimas parametras
}

const user: User = {
  name: 'james',
  id: 15,
  role: 'admin',
};
const adUsr: AdminUser = {
  name: 'Mike Admin',
  id: 55,
  role: 'admin',
  logName(prefix: string) {
    console.log(prefix);
  },
  // birthDate: new Date('1980-01-01'),
};
