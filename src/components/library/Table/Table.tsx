import React, { HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import './Table.css';

export interface TableProps extends HTMLAttributes<HTMLTableElement> {
  striped?: boolean;
  hoverable?: boolean;
  bordered?: boolean;
  compact?: boolean;
}

export interface TableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {}

export interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {}

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  selected?: boolean;
}

export interface TableHeadProps extends ThHTMLAttributes<HTMLTableCellElement> {
  sortable?: boolean;
  sortDirection?: 'asc' | 'desc' | null;
  onSort?: () => void;
}

export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {}

export function Table({
  striped = false,
  hoverable = false,
  bordered = false,
  compact = false,
  className = '',
  children,
  ...props
}: TableProps) {
  const classes = [
    'table',
    striped && 'table-striped',
    hoverable && 'table-hoverable',
    bordered && 'table-bordered',
    compact && 'table-compact',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className="table-wrapper">
      <table className={classes} {...props}>
        {children}
      </table>
    </div>
  );
}

export function TableHeader({ className = '', children, ...props }: TableHeaderProps) {
  return (
    <thead className={`table-header ${className}`} {...props}>
      {children}
    </thead>
  );
}

export function TableBody({ className = '', children, ...props }: TableBodyProps) {
  return (
    <tbody className={`table-body ${className}`} {...props}>
      {children}
    </tbody>
  );
}

export function TableRow({ selected, className = '', children, ...props }: TableRowProps) {
  return (
    <tr className={`table-row ${selected ? 'table-row-selected' : ''} ${className}`} {...props}>
      {children}
    </tr>
  );
}

export function TableHead({
  sortable,
  sortDirection,
  onSort,
  className = '',
  children,
  ...props
}: TableHeadProps) {
  return (
    <th
      className={`table-head ${sortable ? 'table-head-sortable' : ''} ${className}`}
      onClick={sortable ? onSort : undefined}
      aria-sort={sortDirection === 'asc' ? 'ascending' : sortDirection === 'desc' ? 'descending' : undefined}
      {...props}
    >
      <div className="table-head-content">
        <span>{children}</span>
        {sortable && (
          <span className="table-sort-icon">
            {sortDirection === 'asc' && <ChevronUp size={14} />}
            {sortDirection === 'desc' && <ChevronDown size={14} />}
            {!sortDirection && (
              <span className="table-sort-icon-inactive">
                <ChevronUp size={14} />
              </span>
            )}
          </span>
        )}
      </div>
    </th>
  );
}

export function TableCell({ className = '', children, ...props }: TableCellProps) {
  return (
    <td className={`table-cell ${className}`} {...props}>
      {children}
    </td>
  );
}
