import { GlobalModule} from '../comps/global/global.module'
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';

export const GlobalComps = [
  NzFormModule,
  NzInputModule,
  NzButtonModule,
  NzIconModule,
  GlobalModule,
  NzModalModule
]