import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/client';
import { quizSchema } from './schema';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = quizSchema.safeParse(body);
  if (!validation.success) return NextResponse.json(validation.error.errors, { status: 404 });
  const quiz = await prisma.quiz.create({
    data: {
      ...body
    }
  });
  return NextResponse.json(quiz, { status: 201 });
}