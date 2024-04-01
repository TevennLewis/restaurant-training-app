import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/client';
import { memberSchema } from './schema';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = memberSchema.safeParse(body);
  if (!validation.success) return NextResponse.json(validation.error.errors, { status: 404 });
  const member = await prisma.member.create({
    data: {
      ...body
    }
  });
  return NextResponse.json(member, { status: 201 });
}
