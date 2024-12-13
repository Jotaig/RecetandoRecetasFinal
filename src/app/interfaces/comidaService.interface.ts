import { Observable, of } from "rxjs"
import { ComidaInterface } from "./comida.interface"
import { mockComidasResponseService } from "../mock/comida.mock"

export const ComidaService: {
    obtenerComida: () => Observable<ComidaInterface>
}={
    obtenerComida: () => of(mockComidasResponseService)
}
