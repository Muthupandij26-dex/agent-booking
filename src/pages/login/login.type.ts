export type LoginResponseType = {
  agentCode: string;
  name: string;
  kycStatus: string;
  accessToken: string;
  agentDetails: {
    agentCode: string;
    name: string;
    kycStatus: string;
    id: string;
  };
};
export type UserFormErrors = {
  username?: string;
  email?: string;
  password?: string;
};
