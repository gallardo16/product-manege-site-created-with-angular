import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingService } from '../../services/loading.service';
import { LoadingComponent } from './loading.component';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;
  let service: LoadingService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(LoadingService);
  });

  describe('#constractor', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });

  describe('#startLoading', () => {
    it('should start loading', () => {
      service.startLoading();
      expect(service.isLoading).toBe(true);
    });
  });
  
  describe('#stopLoading', () => {
    it('should stop loading', () => {
      service.stopLoading();
      expect(service.isLoading).toBe(false);
    });
  });
});
