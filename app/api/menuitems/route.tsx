import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/client';
import { menuItemSchema } from './schema';

export async function GET(request: NextRequest) {
  const menuItems = await prisma.menuItem.findMany();
  if (!menuItems) return NextResponse.json({ error: 'No menu items found' }, { status: 404 });
  return NextResponse.json(menuItems, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = menuItemSchema.safeParse(body);
  if (!validation.success) return NextResponse.json(validation.error.errors, { status: 404 });
  const menuItem = await prisma.menuItem.create({
    data: {
      ...body
    }
  });
  return NextResponse.json(menuItem, { status: 200 });
}
