import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/client';
import { quizSchema } from '../../schema';

export async function GET(
  request: NextRequest,
  { params }: ReqParams) {
  const quizzes = await prisma.quiz.findMany({
    where: {
      teamId: parseInt(params.id)
    }
  });
  if (!quizzes) return NextResponse.json({ error: 'No quizzes found' }, { status: 404 });
  return NextResponse.json(quizzes, { status: 200 });
}

export async function PATCH(
  request: NextRequest,
  { params }: ReqParams) {
    const body = await request.json();
    const validation = quizSchema.safeParse(body);
    if (!validation.success) return NextResponse.json(validation.error.errors, { status: 404 });
    const updatedQuiz = await prisma.quiz.update({
      where: {
        id: parseInt(params.id)
      },
      data: {
        ...body
      }
    });
    return NextResponse.json(updatedQuiz, { status: 200 });
  }

export async function DELETE(
  request: NextRequest,
  { params }: ReqParams) {
    const deletedQuiz = await prisma.quiz.delete({
      where: {
        id: parseInt(params.id)
      }
    });
    if (!deletedQuiz) return NextResponse.json({ error: 'Quiz not found' }, { status: 404 });
    return NextResponse.json({ status: 204 });
  }