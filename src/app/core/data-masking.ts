export function maskAadhaar(value?: string | null): string {
  if (!value) return '';
  const digits = String(value).replace(/\D/g, '');
  if (digits.length < 4) return '****';
  return `XXXX-XXXX-${digits.slice(-4)}`;
}

export function isMaskedAadhaar(value?: string | null): boolean {
  return !!value && /^X{4}-X{4}-\d{4}$/.test(value);
}
