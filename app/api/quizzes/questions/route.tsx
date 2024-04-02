import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/client';
import { questionSchema } from './schema';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = questionSchema.safeParse(body);
  if (!validation.success) return NextResponse.json(validation.error.errors, { status: 404 });
  const question = await prisma.question.create({
    data: {
      ...body
    }
  });
  return NextResponse.json(question, { status: 200 });
}