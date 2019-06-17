import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WebliotecaSharedModule } from 'app/shared';
import {
    AutorComponent,
    AutorDetailComponent,
    AutorUpdateComponent,
    AutorDeletePopupComponent,
    AutorDeleteDialogComponent,
    autorRoute,
    autorPopupRoute
} from './';

const ENTITY_STATES = [...autorRoute, ...autorPopupRoute];

@NgModule({
    imports: [WebliotecaSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [AutorComponent, AutorDetailComponent, AutorUpdateComponent, AutorDeleteDialogComponent, AutorDeletePopupComponent],
    entryComponents: [AutorComponent, AutorUpdateComponent, AutorDeleteDialogComponent, AutorDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WebliotecaAutorModule {}
