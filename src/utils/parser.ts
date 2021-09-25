export function clearSpecialChar(licensePlate: string): string {
    return licensePlate.replace(/[\s-]/g, '');
}
