import { InputError } from '../../lib/errors'

export const validateId = async (id: string) => {
  if (!id) {
    throw new InputError('missing id in request')
  }
}
