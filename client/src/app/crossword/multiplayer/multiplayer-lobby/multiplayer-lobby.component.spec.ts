import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MultiplayerLobbyComponent } from "./multiplayer-lobby.component";
import { AppModule } from "../../../app.module";

describe("MultiplayerLobbyComponent", () => {
  let component: MultiplayerLobbyComponent;
  let fixture: ComponentFixture<MultiplayerLobbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplayerLobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
