import { TestBed } from '@angular/core/testing';

import { ApiComidaService } from './apicomida.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { mockComidasResponseService } from '../mock/comida.mock';
import { of } from 'rxjs';

describe('ApicomidaService', () => {
  let service: ApiComidaService;
  let HttpClientSpy: jasmine.SpyObj<HttpClient>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    HttpClientSpy = jasmine.createSpyObj('HttpClient',['get'])
    service = new ApiComidaService(HttpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debería llamar a obtener comiditas', (done: DoneFn) => {
    HttpClientSpy.get.and.returnValue(of(mockComidasResponseService));
    service.obtenerComida().subscribe({
      next: (respuestaApi) => {
        expect(respuestaApi).toEqual;{mockComidasResponseService}
        done();
      }
    })
  })
});
