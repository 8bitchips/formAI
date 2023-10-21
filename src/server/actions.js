import HttpError from '@wasp/core/HttpError.js'

export const createForm = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  const form = await context.entities.Form.create({
    data: {
      title: args.title,
      description: args.description,
      user: { connect: { id: context.user.id } },
      questions: {
        create: args.questions.map(({ text, type }) => ({ text, type }))
      }
    },
    include: { questions: true }
  });

  return form;
}

export const editForm = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  const form = await context.entities.Form.findUnique({
    where: { id: args.formId }
  });

  if (form.userId !== context.user.id) { throw new HttpError(403) };

  const updatedForm = await context.entities.Form.update({
    where: { id: args.formId },
    data: { title: args.title, description: args.description }
  });

  const updatedQuestions = [];
  for (const { id, text, type } of args.questions) {
    const question = await context.entities.Question.findUnique({
      where: { id }
    });
    if (question.formId !== args.formId) { throw new HttpError(400, `Question with id ${id} does not belong to form with id ${args.formId}`) }

    const updatedQuestion = await context.entities.Question.update({
      where: { id },
      data: { text, type }
    });
    updatedQuestions.push(updatedQuestion);
  }

  return { ...updatedForm, questions: updatedQuestions };
}