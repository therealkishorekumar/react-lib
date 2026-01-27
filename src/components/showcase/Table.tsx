import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Badge,
} from '../library';

export function TableShowcase() {
  return (
    <section className="showcase-section">
      <h2 className="showcase-title">Table</h2>
      <Table striped hoverable>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>john@example.com</TableCell>
            <TableCell>Admin</TableCell>
            <TableCell><Badge variant="success">Active</Badge></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jane Smith</TableCell>
            <TableCell>jane@example.com</TableCell>
            <TableCell>Editor</TableCell>
            <TableCell><Badge variant="success">Active</Badge></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Bob Johnson</TableCell>
            <TableCell>bob@example.com</TableCell>
            <TableCell>Viewer</TableCell>
            <TableCell><Badge variant="warning">Pending</Badge></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}
