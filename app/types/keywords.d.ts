declare type TKeyword = {
  _id: string;
  keyword: string;
  priority: number;
  isConditional: boolean;
  aircraftTypes: { _id: string; aircraft: string }[];
};
