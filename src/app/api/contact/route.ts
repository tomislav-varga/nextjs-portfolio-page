import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import ContactMessage from '@/models/ContactMessage';
import { rateLimit } from '@/lib/rate-limit';
import { sanitizeFormData } from '@/lib/sanitize';

export async function POST(request: NextRequest) {
  try {
    // Check rate limit
    const isAllowed = await rateLimit(request);
    if (!isAllowed) {
      return NextResponse.json(
        { message: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const data = await request.json();
    
    // Sanitize input data
    const sanitizedData = sanitizeFormData(data);
    const { name, email, message } = sanitizedData;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await connectDB();

    // Create new message
    const newMessage = await ContactMessage.create({
      name,
      email,
      message,
    });

    return NextResponse.json(
      { message: 'Message sent successfully', data: newMessage },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error sending message:', error);
    return NextResponse.json(
      { message: 'Error sending message' },
      { status: 500 }
    );
  }
} 