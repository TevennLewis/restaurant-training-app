import { NextRequest, NextResponse } from 'next/server';

const memberSeed = [
  { id: 1, name: 'Courtney' },
  { id: 2, name: 'Tevenn' },
  { id: 3, name: 'John' }
];

export function GET(
  request: NextRequest,
  { params }: { params: { id: number }}) {
    if (params.id > 10) return NextResponse.json({ error: 'ID not found' }, { status: 404 });
  return NextResponse.json(memberSeed);
}