import { TestBed } from '@angular/core/testing';
import { AppStorage } from './storage';

interface Item {
  id: number;
}

describe('Storage', () => {
  let service: AppStorage<Item[]>;

  // const STORAGE_TOKEN = new InjectionToken<AppStorage<Item[]>>('Storage Service', {
  //   providedIn: 'root',
  //   factory: () => new AppStorage<Item[]>('items'),
  // });

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AppStorage,
          useFactory: () => new AppStorage<Item[]>('items'),
        },
      ],
    });
    service = TestBed.inject(AppStorage);
    // service = TestBed.inject(STORAGE_TOKEN);
  });

  beforeEach(() => {
    vi.spyOn(globalThis.Storage.prototype, 'getItem');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('method get call localStorage', () => {
    service.get();
    expect(localStorage.getItem).toHaveBeenCalled();
  });
});
