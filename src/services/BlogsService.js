import { AppState } from '../AppState'
import { Blog } from '../models/Blog'
import { logger } from '../utils/Logger'
import { convertToQuery } from '../utils/Query'
import { api } from './AxiosService'

class BlogsService {
  async getBlogs(query = {}) {
    AppState.blogs = []
    logger.log('query', query)
    const res = await api.get('api/projects' + convertToQuery(query))
    logger.log('porject res', res)
    AppState.projects = res.data.map(p => new Blog(p))
  }
}

export const blogsService = new BlogsService()
