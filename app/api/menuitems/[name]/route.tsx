import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/client';
import { partialMenuItemSchema } from '../schema';

export async function GET(
  request: NextRequest,
  { params }: ReqParams) {
  const menuItem = await prisma.menuItem.findUnique({
    where: {
      name: params.name
    }
  });
  if (!menuItem) return NextResponse.json({ error: 'Menu Item not found' }, { status: 404 });
  return NextResponse.json(menuItem, { status: 200 });
}

export async function PATCH(
  request: NextRequest,
  { params }: ReqParams) {
    const body = await request.json();
    const validation = partialMenuItemSchema.safeParse(body);
    if (!validation.success) return NextResponse.json(validation.error.errors, { status: 404 });
    const updatedItem = await prisma.menuItem.update({
      where: {
        name: params.name
      },
      data: {
        ...body
      }
    });
    return NextResponse.json(updatedItem, { status: 200 });
  }

  export async function DELETE(
    request: NextRequest,
    { params }: ReqParams) {
      const deletedItem = await prisma.menuItem.delete({
        where: {
          name: params.name
        }
      });
      if (!deletedItem) return NextResponse.json({ error: 'Menu Item not found' }, { status: 404 });
      return NextResponse.json({ status: 204 });
    }