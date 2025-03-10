export interface LidsInterface {
  id: string;
  phone: {
    number: string;
    isTelegram: boolean;
  };
  user: {
    fullName: string;
    createdAt: string;
    profileImage?: string;
  };
  lastContact: {
    description: string;
    createdAt: string;
    isCall: boolean;
  };
  status: string;
  hudud: string
  birthday: string
  manba: string
  addAdmin: string
}
