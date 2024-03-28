import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/client';
import { memberSchema } from './schema';

export async function GET(request: NextRequest) {
  const members = await prisma.member.findMany();
  return NextResponse.json(members, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = memberSchema.safeParse(body);
  if (!validation.success) return NextResponse.json(validation.error.errors)
  const member = await prisma.member.create({
    data: {
      ...body
    }
  });
  return NextResponse.json(
    member, 
    { status: 201 });
}