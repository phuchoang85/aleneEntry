export type resultReq = {
  id: number;
  content: string;
  status: "good" | "bad" | "noSelect";
  video: string;
  guide: string;
};

export type initial = {
  questionList: resultReq[];
  questionSelect: resultReq | null;
  loading: boolean;
  error: any;
  dataQuestion: resultReq[];
};

export type dataContent = {
  id: number;
  content1: string;
  content2: string;
  content3: string;
};
