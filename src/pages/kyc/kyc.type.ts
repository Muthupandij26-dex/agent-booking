export type KycDetails = {
  id: string;
  agentId: string;
  updatedAt: string;
  createdAt: string;
  documentType: string | null;
  docUrl: string | null;
};

export type AgentVerificationResponse = {
  general: number[];
  credentials: number[];
  kyc: KycDetails;
};
