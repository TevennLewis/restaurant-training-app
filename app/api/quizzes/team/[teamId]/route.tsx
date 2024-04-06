import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/client';

export async function GET(
  request: NextRequest,
  { params }: ReqParams) {
  const quizzes = await prisma.quiz.findMany({
    where: {
      teamId: parseInt(params.teamId)
    }
  });
  if (!quizzes) return NextResponse.json({ error: 'No quizzes found' }, { status: 404 });
  return NextResponse.json(quizzes, { status: 200 });
}