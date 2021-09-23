import { AppState } from '../AppState'
import { Blog } from '../models/Blog'
import { logger } from '../utils/Logger'
import { convertToQuery } from '../utils/Query'
import { api } from './AxiosService'

class BlogsService {
  async getBlogs(query = {}) {
    AppState.blogs = []
    logger.log('query', query)
    const res = await api.get('api/blogs' + convertToQuery(query))
    logger.log('porject res', res)
    AppState.blogs = res.data.map(p => new Blog(p))
  }

  async getBlogbyId(blogId) {
    AppState.blog = null
    const res = await api.get(`api/blogs/${blogId}`)
    logger.log('blogsService getBlogById', res)
    AppState.blog = new Blog(res.data)
  }
}

export const blogsService = new BlogsService()
