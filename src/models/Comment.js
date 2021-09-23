export class Comment {
  constructor(comData) {
    this.id = comData.id
    this.blogID = comData.blog
    this.creatorID = comData.creatorID
    this.creator = comData.creator || {}
    this.body = comData.body
  }
}
