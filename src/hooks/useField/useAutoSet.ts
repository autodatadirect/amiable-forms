import { useEffect } from 'react'

const isNull = (v: any): boolean => v === null || v === undefined

const valueOutOfSync = ({ value, prevValue }: FieldComm): boolean => {
  if (isNull(value) && isNull(prevValue)) return false
  return value !== prevValue
}

const useAutoSet = (name: string, comm: FieldCommRef, setValue: FieldSetValue, field: Field, form: UseFormReturn): void => {
  const current = comm.current
  const currentValue = current.value
  const requestRerun = current.requestRerun
  const registered = field.registered
  useEffect(() => {
    let shouldAutoSet = false

    /*
     * check for out of sync value
     */
    if (valueOutOfSync(current)) {
      shouldAutoSet = true
    }

    /*
     * check if a rerun was requested by the pre-validation in shouldUpdate
     */
    if (requestRerun) {
      shouldAutoSet = true
      current.requestRerun = false
    }

    /*
     * check if the field has been registered
     */
    if (!registered) {
      shouldAutoSet = true
    }

    if (shouldAutoSet) {
      setValue(current.value, undefined)
    }
  }, [comm, current, currentValue, requestRerun, registered])
}

export default useAutoSet
