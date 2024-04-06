import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/client';
import { partialQuestionSchema } from '../schema';

export async function GET(
  request: NextRequest,
  { params }: ReqParams) {
  const questions = await prisma.question.findMany({
    where: {
      quizId: parseInt(params.quizId)
    }
  });
  if (!questions) return NextResponse.json({ error: 'No questions found' }, { status: 404 });
  return NextResponse.json(questions, { status: 200 });
}

export async function PATCH(
  request: NextRequest,
  { params }: ReqParams) {
    const body = await request.json();
    const validation = partialQuestionSchema.safeParse(body);
    if (!validation.success) return NextResponse.json(validation.error.errors, { status: 404 });
    const updatedQuestion = await prisma.question.update({
      where: {
        id: parseInt(params.quizId)
      },
      data: {
        ...body
      }
    });
    return NextResponse.json(updatedQuestion, { status: 200 });
  }

  export async function DELETE(
    request: NextRequest,
    { params }: ReqParams) {
      const deletedQuestion = await prisma.question.delete({
        where: {
          id: parseInt(params.quizId)
        }
      });
      if (!deletedQuestion) return NextResponse.json({ error: 'Question not found' }, { status: 404 });
      return NextResponse.json({ status: 204 });
    }