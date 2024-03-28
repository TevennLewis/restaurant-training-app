import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/client';

export async function GET(request: NextRequest) {
  const members = await prisma.member.findMany();
  return NextResponse.json(members, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const member = await prisma.member.create({
    data: {
      email: body.email,
      password: body.password,
      name: body.name,
      isAdmin: body.isAdmin
    }
  });
  return NextResponse.json(member, { status: 201 });
}