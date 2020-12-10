// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { AddonUserProfileFieldMenuHandler } from './services/handlers/menu';
import { CoreUserProfileFieldDelegate } from '@features/user/services/user-profile-field-delegate';
import { AddonUserProfileFieldMenuComponent } from './component/menu';
import { CoreComponentsModule } from '@components/components.module';
import { CoreDirectivesModule } from '@directives/directives.module';

@NgModule({
    declarations: [
        AddonUserProfileFieldMenuComponent,
    ],
    imports: [
        CommonModule,
        IonicModule.forRoot(),
        TranslateModule.forChild(),
        FormsModule,
        ReactiveFormsModule,
        CoreComponentsModule,
        CoreDirectivesModule,
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            multi: true,
            deps: [],
            useFactory: () => () =>
                CoreUserProfileFieldDelegate.instance.registerHandler(AddonUserProfileFieldMenuHandler.instance),
        },
    ],
    exports: [
        AddonUserProfileFieldMenuComponent,
    ],
    entryComponents: [
        AddonUserProfileFieldMenuComponent,
    ],
})
export class AddonUserProfileFieldMenuModule {}
