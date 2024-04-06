import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/client';
import { partialQuizSchema } from '../schema';

export async function GET(
  request: NextRequest,
  { params }: ReqParams) {
    const quiz = await prisma.quiz.findUnique({
      where: {
        id: parseInt(params.id)
      }
    });
    if (!quiz) return NextResponse.json({ error: 'Quiz not found' }, { status: 404 });
    return NextResponse.json(quiz, { status: 200 });
  }

  export async function PATCH(
    request: NextRequest,
    { params }: ReqParams) {
      const body = await request.json();
      const validation = partialQuizSchema.safeParse(body);
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