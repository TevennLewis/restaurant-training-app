import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/client';
import { memberSchema } from '../schema';

export async function GET(
  request: NextRequest,
  { params }: ReqParams) {
  const members = await prisma.member.findMany({
    where: {
      teamId: parseInt(params.teamId)
    }
  });
  if (!members) return NextResponse.json({ error: 'No members found' }, { status: 404 });
  return NextResponse.json(members, { status: 200 });
}