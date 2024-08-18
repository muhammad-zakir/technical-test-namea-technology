import { toDto } from './list-posts-query-mapper';
import { validate } from './list-posts-query-validator';

export type ListPostsQuery = Readonly<{
  pageNumber: number;
  pageSize: number;
}>;

//export function makeListPostsQuery({ postsRepository }: Pick<Dependencies, 'postsRepository'>) {
export function makeListPostsQuery() {
  return async function listPostsQuery(query: ListPostsQuery) {
    await validate(query);

    const { pageNumber, pageSize } = query;

    //    const { count, posts } = await postsRepository.list({ pageNumber, pageSize });

    return toDto({
      count: 1,
      pageNumber,
      pageSize,
      posts: {
        id: '1',
      },
    });
  };
}
