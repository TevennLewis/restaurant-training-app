import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/client';

export async function GET(
  request: NextRequest,
  { params }: ReqParams) {
  const menuItems = await prisma.menuItem.findMany({
    where: {
      teamId: parseInt(params.teamId)
    }
  });
  if (!menuItems) return NextResponse.json({ error: 'No menu items found' }, { status: 404 });
  return NextResponse.json(menuItems, { status: 200 });
}