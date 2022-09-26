import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CatPictureService } from './cat-picture.service';

describe('CatPictureService', () => {
  let service: CatPictureService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CatPictureService],
    });
    service = TestBed.inject(CatPictureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getCatPicture function', () => {
    expect(service.getCatPicture).toBeTruthy();
  });
});
