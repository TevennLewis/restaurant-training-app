import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/client';
import { partialMemberSchema } from '../schema';

type IdParam = {
  params: {
    id: string;
  }
}

export async function GET(
  request: NextRequest,
  { params }: IdParam) {
    const member = await prisma.member.findUnique({
      where: {
        id: parseInt(params.id)
      }
    });
    return NextResponse.json(member, { status: 200 });
}

export async function PATCH(
  request: NextRequest,
  { params }: IdParam) {
    const body = await request.json();
    const validation = partialMemberSchema.safeParse(body);
    if (!validation.success) return NextResponse.json(validation.error.errors);
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


export async function DELETE(
  request: NextRequest,
  { params }: IdParam) {
    const deletedMember = await prisma.member.delete({
      where: {
        id: parseInt(params.id)
      }
    });
    console.log(deletedMember)
    return NextResponse.json({ status: 204 });
}