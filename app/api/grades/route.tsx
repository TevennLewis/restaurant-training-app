import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/client';
import { gradeSchema, extendedGradeSchema } from './schema';

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

export async function PATCH(request: NextRequest) {
  const body = await request.json();
  const validation = extendedGradeSchema.safeParse(body);
  if (!validation.success) return NextResponse.json(validation.error.errors, { status: 404 });
  const updatedGrade = await prisma.grade.update({
    where: { 
      gradeId: { 
        quizId: body.quizId ,
        memberId: body.memberId
      } 
    },
    data: { grade: body.grade }
  });
  return NextResponse.json(updatedGrade, { status: 200 });
}