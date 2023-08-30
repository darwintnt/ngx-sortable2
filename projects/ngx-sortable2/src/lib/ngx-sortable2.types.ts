import { type AbstractControl, type FormArray } from "@angular/forms";

export type SortableData<T> = T extends AbstractControl ? (FormArray<T> | T[]) : T[]

export type CloneFunction<T> = (item: T) => T
