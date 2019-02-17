export class PostModel {
  title: string;
  content: string;
  loveIts: number;
  created_ad: Date;

  constructor(title: string, content: string, loveIts: number, created_ad?: Date) {
    this.title = title;
    this.content = content;
    this.loveIts = loveIts;
    if (created_ad == null) {
      this.created_ad = new Date();
    } else {
      this.created_ad = created_ad;
    }
  }
}
