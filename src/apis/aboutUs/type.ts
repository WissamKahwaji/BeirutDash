export type AboutUsInfo = {
  title: string;
  description: string;
  content: Content[];
};

export type Content = {
  img: string | null | File;
  text: string;
};
