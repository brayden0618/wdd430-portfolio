"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface PaginationProps {
  totalPages: number;
}

export default function Pagination({
  totalPages,
}: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  function createPageURL(pageNumber: number) {
    const params = new URLSearchParams(searchParams);

    params.set("page", pageNumber.toString());

    return `${pathname}?${params.toString()}`;
  }

  return (
    <div className="flex justify-center gap-4 mt-8">
      <Link
        href={createPageURL(Math.max(currentPage - 1, 1))}
        className="border px-4 py-2 rounded"
      >
        Previous
      </Link>

      <span className="px-4 py-2">
        {currentPage} / {totalPages}
      </span>

      <Link
        href={createPageURL(
          Math.min(currentPage + 1, totalPages)
        )}
        className="border px-4 py-2 rounded"
      >
        Next
      </Link>
    </div>
  );
}