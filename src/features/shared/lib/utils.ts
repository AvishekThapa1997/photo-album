import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function groupItemByNoOfColumns<T>(items: Array<T>, column: number) {
  const result: Array<Array<T>> = [];
  for (let i = 0; i < items.length; i += column) {
    const groupedItems = items.slice(i, i + column);
    result.push(groupedItems);
  }
  return result;
}
