import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/client';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string }}) {
    const member = await prisma.member.findUnique({
      where: {
        id: parseInt(params.id)
      }
    });
    return NextResponse.json(member, { status: 200 });
}

