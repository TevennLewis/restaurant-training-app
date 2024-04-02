import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/client';
import { teamSchema } from './schema';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = teamSchema.safeParse(body);
  if (!validation.success) return NextResponse.json(validation.error.errors, { status: 404 });
  const team = await prisma.team.create({
    data: {
      ...body
    }
  });
  return NextResponse.json(team, { status: 200 });
}