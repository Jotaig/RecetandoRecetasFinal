import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriasPage } from './categorias.page';
import { IonicModule } from '@ionic/angular';
import { ApiComidaService } from './apicomida.service';
import { ComidaService } from '../interfaces/comidaService.interface';

describe('CategoriasPage', () => {
  let categoriaspage: CategoriasPage;
  let fixture: ComponentFixture<CategoriasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriasPage],
      imports: [IonicModule.forRoot()],
      providers: [{provide:ApiComidaService, useValue:ComidaService}]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriasPage);
    categoriaspage = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(categoriaspage).toBeTruthy();
  });

  it(' titulo deberia ser Categorias de Comidas', () => {
    const titulo = categoriaspage.titulo;
    expect(titulo).toEqual('Categorias Page')
  });

});
