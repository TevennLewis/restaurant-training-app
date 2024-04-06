import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/client';
import { quizSchema } from '../schema';

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

  