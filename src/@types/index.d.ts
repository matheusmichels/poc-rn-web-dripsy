import { BaseRootParamList } from '../routes/params';

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends BaseRootParamList {}
  }
}
