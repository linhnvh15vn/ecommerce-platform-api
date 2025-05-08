import { randomBytes } from 'crypto';

export function generateUniqueId(length: number = 16): string {
  return randomBytes(length).toString('hex');
}
