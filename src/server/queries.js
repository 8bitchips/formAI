import HttpError from '@wasp/core/HttpError.js'

export const getForm = async ({ id }, context) => {
  if (!context.user) { throw new HttpError(401) }

  const form = await context.entities.Form.findUnique({
    where: { id },
    include: { questions: true }
  })

  if (!form) throw new HttpError(404, 'No form with id ' + id)

  return form
}