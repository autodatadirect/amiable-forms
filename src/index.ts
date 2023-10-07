import React from 'react'

export { default as AmiableForm } from './components/AmiableForm'
export { default as ValueUpdator } from './components/ValueUpdator'
export { default as Debug } from './components/Debug'

export { default as useForm } from './hooks/useForm'
export { default as useField } from './hooks/useField'
export { default as useSubmit } from './hooks/useSubmit'

export { default as useFieldValue } from './hooks/useFieldValue'
export { default as useValues } from './hooks/useValues'
export { default as useArrayField } from './hooks/useArrayField'
export { default as useRepeatedField } from './hooks/useRepeatedField'
export { default as useFormIsValid } from './hooks/useFormIsValid'
export { default as useFieldIsValid } from './hooks/useFieldIsValid'
export { default as useFieldCustomMeta } from './hooks/useFieldCustomMeta'

declare global {
  export type Submit = (...args: any[]) => void

  export type OnSubmit = (event: React.SyntheticEvent) => void

  export interface SubmitHandlers {
    submit: Submit
    onSubmit: OnSubmit
  }

  export interface ProcessorFormState extends FormState, FormDispatchers {

  }

  export type Processor = (values: Values, state: ProcessorFormState, ...args: any[]) => any

  export interface AmiableFormState extends FormDispatchers {
    stateRef: StateRef
    submit: Submit
    onSubmit: OnSubmit
    addUpdateHandler: HandlerSupplier
    removeUpdateHandler: HandlerSupplier
  }

  export interface UseFormReturn extends FormState, AmiableFormState {

  }

  export interface FieldState extends UseFormReturn {
    field: Field
    value: any
    cleanValue: any
    bypassParseDueToFocus: boolean
  }

  export type FieldStateRef = React.MutableRefObject<FieldState>

  export type AmiableFormStateRef = React.MutableRefObject<AmiableFormState>

  export interface AmiableFormProps {
    process: Processor
    processInvalid?: Processor
    validate?: FormValidator
    transform: Transform
    initialValues?: Values
    children: any
  }

  export interface Values {
    [key: string]: any
  }

  export type ShouldUpdateHandler = (event: StateUpdateEvent) => boolean

  export type FormRef = React.MutableRefObject<AmiableFormState>

  export type StateRef = React.MutableRefObject<FormState>

  export type Validator = (value: any, values: Values) => string | undefined

  export interface StateUpdateEvent {
    previous: FormState
    current: FormState
  }

  export interface TransformEvent {
    next: FormState
    current: FormState
  }

  export interface FormMeta {
    version: string
    touched: boolean
    submitted: boolean
    submitCount: number
    submitting: boolean
    visited: boolean
    valid: boolean
    dirty: boolean
    error: FormError
    custom: any
  }

  export interface FormState {
    cleanValues: Values
    values: Values
    fields: Fields
    meta: FormMeta
  }

  export interface Fields {
    [key: string]: Field
  }

  export interface Field {
    error: FormError
    valid: boolean
    touched: boolean
    visited: boolean
    dirty: boolean
    focused: boolean
    registered: boolean
    custom: any
  }

  export interface Action {
    type: string
  }

  export interface AnyAction extends Action {
    [key: string]: any
  }

  export interface SetFieldAction extends Action {
    name: string
    field: Field
  }

  export interface SetMetaValueAction extends Action {
    key: keyof FormMeta
    value: any
  }

  export interface RemoveFieldAction extends Action {
    name: string
  }

  export interface SetValueAction extends Action {
    name: string
    value: any
  }

  export interface SetValuesOptions {
    merge: boolean
  }

  export interface SetValuesAction extends Action {
    values: Values
    options: SetValuesOptions
  }

  export interface SetValueWithFieldAction extends SetFieldAction, SetValueAction {

  }

  export type ValueGetter = (values: Values) => any

  export type Reducer = (state: FormState, action: Action) => FormState

  export type Transform = (event: TransformEvent) => FormState

  export type FormValidator = (values: Values) => string | undefined

  export type Dispatch = (action: Action) => void

  export type SetFieldDispatcher = (name: string, field: Field) => void

  export type SetMetaValueDispatcher = (key: keyof FormMeta, value: any) => void

  export type RemoveFieldDispatcher = (name: string) => void

  export type ResetDispatcher = () => void

  export type ClearDispatcher = () => void

  export type SetValueDispatcher = (name: string, valueOrValueGetter: ValueGetter | any) => void

  export type SetValueWithFieldDispatcher = (name: string, valueOrValueGetter: ValueGetter | any, field: Field) => void

  export type SetValuesDispatcher = (valuesOrValuesGetter: ValueGetter | any, options?: SetValuesOptions) => void

  export type FieldParser = (value: any) => any

  export interface FormDispatchers {
    setField: SetFieldDispatcher
    setMetaValue: SetMetaValueDispatcher
    removeField: RemoveFieldDispatcher
    reset: ResetDispatcher
    clear: ClearDispatcher
    setValue: SetValueDispatcher
    setValueWithField: SetValueWithFieldDispatcher
    setValues: SetValuesDispatcher
  }

  export type Handler = (event: any) => void

  export type HandlerSupplier = (handler: Handler) => void

  export type FieldSetFocused = (focused: boolean) => void
  export type FieldSetVisited = () => void
  export type FieldOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => void
  export type FieldOnBlurHandler = () => void
  export type FieldOnFocusHandler = () => void

  export interface FieldSetValueOptions {
    touch: boolean
  }

  export type FieldSetValue = (value: any, options: FieldSetValueOptions | undefined) => void

  export interface FieldActions {
    setValueWithEffect: FieldSetValue
    setFocused: FieldSetFocused
    setVisited: FieldSetVisited
    onChange: FieldOnChangeHandler
    onBlur: FieldOnBlurHandler
    onFocus: FieldOnFocusHandler
  }

  export interface FieldComm {
    bypassParseDueToFocus: boolean
    requestRerun: boolean
    prevValue: any
    value: any
    cleanValue: any
  }

  export type FieldCommRef = React.MutableRefObject<FieldComm>

  export interface UseFieldArgs {
    name: string
    validators: Validator[]
    parse: FieldParser
    format: FieldParser
    parseWhenFocused: boolean
    custom: any
  }

  export interface UseFieldResult extends Field {
    setValue: FieldSetValue
    setVisited: FieldSetVisited
    setFocused: FieldSetFocused
    onChange: FieldOnChangeHandler
    onBlur: FieldOnBlurHandler
    onFocus: FieldOnFocusHandler
    value: any
    submitted: boolean
    cleanValue: any
    submitCount: number
    submitting: boolean
  }

  export type FormError = string | undefined
}
