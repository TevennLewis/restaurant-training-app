import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/client';

export async function GET(
  request: NextRequest,
  { params }: ReqParams) {
  const questions = await prisma.question.findMany({
    where: {
      quizId: parseInt(params.id)
    }
  });
  if (!questions) return NextResponse.json({ error: 'No questions found' }, { status: 404 });
  return NextResponse.json(questions, { status: 200 });
}