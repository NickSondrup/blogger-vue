
export class Blog {
  constructor(data) {
    this.id = data._id
    this.title = data.title
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.creatorId = data.creatorId
    this.creator = data.creator || {}
  }
}
