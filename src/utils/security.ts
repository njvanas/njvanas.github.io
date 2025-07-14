/**
 * Security utilities for the portfolio website
 */

// Input sanitization function
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
};

// Email validation with security considerations
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email) && email.length <= 254; // RFC 5321 limit
};

// Rate limiting for form submissions (client-side)
class RateLimiter {
  private attempts: Map<string, number[]> = new Map();
  private readonly maxAttempts = 3;
  private readonly windowMs = 60000; // 1 minute

  canAttempt(identifier: string): boolean {
    const now = Date.now();
    const attempts = this.attempts.get(identifier) || [];
    
    // Remove old attempts outside the window
    const recentAttempts = attempts.filter(time => now - time < this.windowMs);
    
    if (recentAttempts.length >= this.maxAttempts) {
      return false;
    }
    
    recentAttempts.push(now);
    this.attempts.set(identifier, recentAttempts);
    return true;
  }
}

export const formRateLimiter = new RateLimiter();

// Secure external link handler
export const handleExternalLink = (url: string): void => {
  // Validate URL
  try {
    const urlObj = new URL(url);
    if (!['http:', 'https:'].includes(urlObj.protocol)) {
      throw new Error('Invalid protocol');
    }
  } catch {
    console.error('Invalid URL provided');
    return;
  }

  // Open with security attributes
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) {
    newWindow.opener = null;
  }
};

// Content Security Policy violation reporter
export const reportCSPViolation = (violation: SecurityPolicyViolationEvent): void => {
  console.warn('CSP Violation:', {
    blockedURI: violation.blockedURI,
    violatedDirective: violation.violatedDirective,
    originalPolicy: violation.originalPolicy
  });
  
  // In production, you might want to send this to a logging service
  // fetch('/api/csp-report', { method: 'POST', body: JSON.stringify(violation) });
};