import { postCreateStoreModule } from './create/post-create.store';

export const postStoreModule = {
  namespace: true,

  modules: {
    create: postCreateStoreModule,
  },
};
