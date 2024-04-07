import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/client';
import { gradeSchema } from './schema'

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = gradeSchema.safeParse(body);
  if (!validation.success) return NextResponse.json(validation.error.errors, { status: 404 });
  const grade = await prisma.grade.create({
    data: {
      ...body
    }
  });
  return NextResponse.json(grade, { status: 200 });
}