import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/client';

export async function GET(request: NextRequest) {
  const menuItems = await prisma.menuItem.findMany();
  if (!menuItems) return NextResponse.json({ error: 'No menu items found' }, { status: 404 });
  return NextResponse.json(menuItems, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
}