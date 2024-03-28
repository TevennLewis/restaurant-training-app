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

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string }}) {
    const body = await request.json();
    console.log(body)
    const updatedMember = await prisma.member.update({
      where: {
        id: parseInt(params.id)
      },
      data: {
        ...body
      }
    });
    return NextResponse.json(updatedMember, { status: 200 });
  }
