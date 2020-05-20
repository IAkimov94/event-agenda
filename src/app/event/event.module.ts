import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EventRoutingModule } from './event-routing.module';
import { AgendaContainer } from './containers/agenda';
import { SpeakerComponent } from './components/speaker';
import { SessionCardComponent } from './components/statement-card';
import { LiveIndicatorComponent } from './components/live-indeicator';
import { SearchComponent } from './components/search';
import { EventView } from './views/event';
import { EventContainer } from './containers/event';
import { LiveSessionsComponent } from './components/live-sessions';


@NgModule({
  imports: [
    CommonModule,
    EventRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    EventView,
    AgendaContainer,
    SpeakerComponent,
    SessionCardComponent,
    LiveIndicatorComponent,
    SearchComponent,
    EventContainer,
    LiveSessionsComponent,
  ],
})
export class EventModule {}
