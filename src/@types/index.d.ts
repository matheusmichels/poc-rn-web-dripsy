import { BaseRootParamList } from '../routes/params';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends BaseRootParamList {}
  }
}
