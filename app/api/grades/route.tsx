import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/client';
import { gradeSchema } from './schema'

export async function POST(request: NextRequest) {
  const body = await request.json();

}