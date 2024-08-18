import * as Interfaces from '@application/common/interfaces';
import { makeConfig } from '@infrastructure/config';
import { Resolver, asValue } from 'awilix';

import { makeLogger } from './logger';

// import * as repositories from './repositories';

export type Dependencies = {
  config: Interfaces.ApplicationConfig;
  logger: Interfaces.Logger;
  //  postsRepository: Interfaces.PostsRepository;
};

export function makeInfrastructureDependencies(): {
  [dependency in keyof Dependencies]: Resolver<Dependencies[dependency]>;
} {
  const config = makeConfig();
  const logger = makeLogger(config);

  return {
    config: asValue(config),
    logger: asValue(logger),
    //    postsRepository: asFunction(repositories.makePostsRepository).singleton(),
  };
}
